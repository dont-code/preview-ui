import { DefaultViewerComponent } from "./default-viewer.component";
import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  getModuleFactory,
  OnDestroy,
  OnInit,
  Type
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, of, Subject, Subscription } from "rxjs";
import { DontCode, PluginModuleInterface, PreviewHandler } from "@dontcode/core";
import { CommandProviderService } from "../../command/services/command-provider.service";
import { DynamicInsertDirective } from "../directives/dynamic-insert.directive";

@Component({
  selector: 'preview-ui-dynamic-base',
  templateUrl: './dynamic-base.component.html',
  styleUrls: ['./dynamic-base.component.css']
})
export abstract class DynamicBaseComponent implements OnInit, OnDestroy {
//  protected unsubscriber = new Subject();
  protected subscriptions = new Subscription();

  protected constructor(protected route:ActivatedRoute,
                        protected componentFactoryResolver: ComponentFactoryResolver,
                        protected provider:CommandProviderService) { }

  ngOnInit(): void {
  }

  protected loadComponent (position:string, host:DynamicInsertDirective): Observable<PreviewHandler> {
    const previewMgr = DontCode.dtcde.getPreviewManager ();
    const currentJson = this.provider.getJsonAt (position);

    const handler = previewMgr.retrieveHandlerConfig(position, currentJson);

    if (handler) {
      console.log("Importing from ", handler.class.source);
      try {
        // First lets try if the plugin is imported during the compilation
        let module:PluginModuleInterface=getModuleFactory('dontcode-plugin/'+handler.class.source).create(null).instance;
        return of(this.applyComponent(module.exposedPreviewHandlers().get(handler.class.name), host));
      } catch (e) {
        // Nope, fallback to dynamically loading it
      }
    } else {
      console.log("No handler found, using default ");
      // No handler found, let's display a message with the default one
      return of (this.applyComponent(DefaultViewerComponent, host));
    }

  }
  protected applyComponentFromConfig (module:any, handlerConfig:DontCode.PreviewHandlerConfig, host:DynamicInsertDirective): PreviewHandler  {
    return this.applyComponent (module[handlerConfig.class.name], host);
  }

  protected applyComponent (componentType:Type<unknown>, host:DynamicInsertDirective): PreviewHandler  {
    //console.log ("Applying component");
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = host.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const handler = componentRef.instance as PreviewHandler;
    return handler;
  }

  ngOnDestroy(): void {
    this.forceUnsubscribe();
  }

  protected forceUnsubscribe(): void {
    this.subscriptions.unsubscribe();
  }

}
