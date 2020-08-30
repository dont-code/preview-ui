import { Component, ComponentFactoryResolver, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";
import { catchError, first, map, flatMap, mergeMap } from "rxjs/operators";
import { forkJoin, from, Observable } from "rxjs";
import { DynamicInsertDirective } from "../../../shared/dynamic/directives/dynamic-insert.directive";
import { DontCode, DontCodeModel, PreviewHandler, CommandProviderInterface } from "@dontcode/core";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'preview-ui-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  screenName$:Observable<string>;

  @ViewChild(DynamicInsertDirective, {static: true}) host: DynamicInsertDirective;

  constructor(private route:ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver,
              protected provider:CommandProviderService) { }

  ngOnInit(): void {
    this.screenName$= this.route.paramMap.pipe(map(params => {
      return params.get('id');
    }));

    this.screenName$.pipe(
      mergeMap (valueId => {
        console.log("Searching for component for route ", this.route.snapshot.url);
        const position = DontCodeModel.ROOT+'/'+this.route.snapshot.url[0];

        return this.loadComponent(position, valueId).pipe(
          map (component => {
            return {valueId, position, component};
          })
        )
      }),
      map( context => {
        // We shouldn't need to convert this.provider to CommandProviderInterface,
        // But otherwise we get an ts error
        context.component.initCommandFlow(this.provider as unknown as CommandProviderInterface,
          context.position+'/'+context.valueId,
          context.position);
      })
    ).subscribe(() => {
      //console.log("Loaded");
    });
  }

  loadComponent (position:string, value:string): Observable<PreviewHandler> {
    const previewMgr = DontCode.dtcde.getPreviewManager ();
    const currentJson = this.provider.getJsonAt (position+'/'+value);

    const handler = previewMgr.retrieveHandlerConfig(position+'/'+value, currentJson);

    if (handler) {
      console.log("Importing from ", handler.class.source);
      // First try to import from ivy modules (in prod)
      if (environment.production) {
        console.log ('production import using __ivy_ngcc__');
        return from (import('@dontcode/plugin-' + handler.class.source + '/__ivy_ngcc__/fesm2015/dontcode-plugin-' + handler.class.source + '.js').then((m) => {
          return this.applyComponent(m, handler);
        }));
      }
      else {
          console.log ('Trying import using ../../');
          return from (
            import('../../../../../../../dist/libs/' + handler.class.source + '/fesm2015/dontcode-plugin-' + handler.class.source + '.js')
          ).pipe (
            map(module => {
                return this.applyComponent (module, handler);
              }),
            catchError(err => {
              console.log ('Trying import using  @dontcode/plugin-../fesm2015');
            return from (
              import('@dontcode/plugin-' + handler.class.source + '/fesm2015/dontcode-plugin-' + handler.class.source + '.js')
            ).pipe (
              map(module => {
                return this.applyComponent(module, handler);
              } )
            );
          }));
      }
    }

  }

  applyComponent (module:any, handlerConfig:DontCode.PreviewHandlerConfig): PreviewHandler  {
    //console.log ("Applying component");
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(module[handlerConfig.class.name]);

    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const handler = componentRef.instance as PreviewHandler;
    return handler;
  }
}
