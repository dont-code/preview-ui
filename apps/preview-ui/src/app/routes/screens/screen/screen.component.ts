import { Component, ComponentFactoryResolver, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";
import { catchError, first, map } from "rxjs/operators";
import { forkJoin, from, Observable } from "rxjs";
import { DynamicInsertDirective } from "../../../shared/dynamic/directives/dynamic-insert.directive";
import { DontCode, DontCodeModel, PreviewHandler } from "@dontcode/core";
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

    forkJoin ({
      screenId:
        this.screenName$.pipe(first()),
      component:
        this.loadComponent ()
    }).pipe(
      map (value => {
//        console.log("Loaded:", value);
        value.component.initCommandFlow(this.provider,
          DontCodeModel.APP_SCREENS+'/'+value.screenId,
          DontCodeModel.APP_SCREENS);
      })
    ).subscribe(() => {
      //console.log("Loaded");
    });
  }

  loadComponent (): Observable<PreviewHandler> {
    const previewMgr = DontCode.dtcde.getPreviewManager ();

    const handler = previewMgr.retrieveHandlerConfig(DontCodeModel.APP_SCREENS);

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
