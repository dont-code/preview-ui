import { Component, ComponentFactoryResolver, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { DynamicInsertDirective } from "../../../shared/dynamic/directives/dynamic-insert.directive";
import { DontCode, DontCodeModel } from '@dontcode/core';
import { environment} from "../../../../environments/environment";

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

    const previewMgr = DontCode.dtcde.getPreviewManager ();

    const handler = previewMgr.retrieveHandlerConfig(DontCodeModel.APP_SCREENS);

    if (handler) {
      console.log("Importing from ", handler.class.source);
        // First try to import from ivy modules (in prod)
      if (environment.production) {
        import('@dontcode/plugin-' + handler.class.source + '/__ivy_ngcc__/fesm2015/dontcode-plugin-' + handler.class.source + '.js').then((m) => {
          this.applyComponent(m, handler);
        });
      }
      else {
        import('@dontcode/plugin-' + handler.class.source + '/fesm2015/dontcode-plugin-' + handler.class.source + '.js').then((m) => {
          this.applyComponent (m, handler);
        }).catch(reason => {
          import('../../../../../../../dist/libs/' + handler.class.source + '/fesm2015/dontcode-plugin-' + handler.class.source + '.js').then((m) => {
            this.applyComponent(m, handler);
          });
        });
      }
    }
  }

  applyComponent (module:any, handler:DontCode.PreviewHandlerConfig)  {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(module[handler.class.name]);

    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
