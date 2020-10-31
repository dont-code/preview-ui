import { DefaultViewerComponent } from './default-viewer.component';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ComponentFactoryResolver,
  ViewChild,
  Type,
  getModuleFactory
} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { PreviewHandler, DontCode, PluginModuleInterface} from '@dontcode/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { CommandProviderService } from '../../command/services/command-provider.service';
import { DynamicInsertDirective } from '../directives/dynamic-insert.directive';

@Component({
  selector: 'preview-ui-dynamic-base',
  templateUrl: './dynamic-base.component.html',
  styleUrls: ['./dynamic-base.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class DynamicBaseComponent implements OnInit {

  @ViewChild(DynamicInsertDirective, {static: true}) host: DynamicInsertDirective;

  constructor(protected route:ActivatedRoute,
    protected  componentFactoryResolver: ComponentFactoryResolver,
    protected provider:CommandProviderService) { }

  ngOnInit(): void {
  }

  protected loadComponent (position:string): Observable<PreviewHandler> {
    const previewMgr = DontCode.dtcde.getPreviewManager ();
    const currentJson = this.provider.getJsonAt (position);

    const handler = previewMgr.retrieveHandlerConfig(position, currentJson);

    if (handler) {
      console.log("Importing from ", handler.class.source);
      try {
        // First lets try if the plugin is imported during the compilation
        let module:PluginModuleInterface=getModuleFactory('dontcode-plugin/'+handler.class.source).create(null).instance;
        return of(this.applyComponent(module.exposedPreviewHandlers().get(handler.class.name)));
      } catch (e) {
        // Nope, fallback to dynamically loading it
      }
      // First try to import from ivy modules (in prod)
      if (environment.production) {
        console.log ('production import using __ivy_ngcc__');
        return from (import('@dontcode/plugin-' + handler.class.source + '/__ivy_ngcc__/fesm2015/dontcode-plugin-' + handler.class.source + '.js').then((m) => {
          return this.applyComponentFromConfig (m, handler);
        }));
      }
      else {
          console.log ('Trying import using ../../');
          return from (
            import('../../../../../../../dist/libs/' + handler.class.source + '/fesm2015/dontcode-plugin-' + handler.class.source + '.js')
          ).pipe (
            map(module => {
                return this.applyComponentFromConfig (module, handler);
              }),
            catchError(err => {
              console.error ('Error importing using ../../ ', err);
              console.log ('Trying import using  @dontcode/plugin-../fesm2015');
            return from (
              import('@dontcode/plugin-' + handler.class.source + '/fesm2015/dontcode-plugin-' + handler.class.source + '.js')
            ).pipe (
              map(module => {
                return this.applyComponentFromConfig (module, handler);
              } )
            );
          }));
      }
    } else {
      console.log("No handler found, using default ");
      // No handler found, let's display a message with the default one
      return of (this.applyComponent(DefaultViewerComponent));
    }

  }
  protected applyComponentFromConfig (module:any, handlerConfig:DontCode.PreviewHandlerConfig): PreviewHandler  {
    return this.applyComponent (module[handlerConfig.class.name]);
  }

  protected applyComponent (componentType:Type<unknown>): PreviewHandler  {
    //console.log ("Applying component");
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const handler = componentRef.instance as PreviewHandler;
    return handler;
  }

}

declare let Reflect: any;
function getAnnotations(typeOrFunc: Type<any>): any[]|null {// Prefer the direct API.
  if ((<any>typeOrFunc).annotations) {
    let annotations = (<any>typeOrFunc).annotations;
    if (typeof annotations === 'function' && annotations.annotations) {
      annotations = annotations.annotations;
    }
    return annotations;
  }

  // API of tsickle for lowering decorators to properties on the class.
  if ((<any>typeOrFunc).decorators) {
    return convertTsickleDecoratorIntoMetadata((<any>typeOrFunc).decorators);
  }

  // API for metadata created by invoking the decorators.
  if (Reflect && Reflect.getOwnMetadata) {
    return Reflect.getOwnMetadata('annotations', typeOrFunc);
  }
  return null;
}

function convertTsickleDecoratorIntoMetadata(decoratorInvocations: any[]): any[] {
  if (!decoratorInvocations) {
    return [];
  }
  return decoratorInvocations.map(decoratorInvocation => {
    const decoratorType = decoratorInvocation.type;
    const annotationCls = decoratorType.annotationCls;
    const annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
    return new annotationCls(...annotationArgs);
  });
}
