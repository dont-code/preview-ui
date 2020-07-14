import { Component, ComponentFactoryResolver, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommandProviderService } from "../../../shared/command/services/command-provider.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { DynamicInsertDirective } from "../../../shared/dynamic/directives/dynamic-insert.directive";
import { DontCode, DontCodeModel } from '@dontcode/core';

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
//      import('../../../../../../../../plugins/dist/libs/'+handler.class.source+'/esm2015').then ((m) => {
      import('@dontcode/plugin-'+handler.class.source+'/esm2015').then ((m) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(m[handler.class.name]);

      const viewContainerRef = this.host.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
    });
    }

  }

}
