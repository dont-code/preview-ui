import {Compiler, Component, ComponentFactoryResolver, Injector, ViewChild} from '@angular/core';
import {BaseAppComponent, DynamicInsertDirective} from "@dontcode/sandbox";
import {PrimeNGConfig} from "primeng/api";
import {mergeMap} from "rxjs/internal/operators";
import {loadRemoteModule} from "@angular-architects/module-federation";
import { PluginModuleInterface, PreviewHandler } from '@dontcode/core';

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseAppComponent{

  sessionId:string|null = null;

  @ViewChild(DynamicInsertDirective, {static:true}) host!: DynamicInsertDirective;

  constructor(private primengConfig: PrimeNGConfig, protected compiler: Compiler, injector:Injector, protected componentFactoryResolver: ComponentFactoryResolver ) {
    super(injector);
  }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
    super.ngOnInit();

    Promise.all([
,
      loadRemoteModule({
        exposedModule:'./Basic',
        remoteEntry:'http://localhost:3000/remoteEntry.js',
        remoteName:'dontCodeStandardPlugins'
      }).then(module => {
        console.log('Loaded Module:', module);
        const mainModuleClass = module['BasicModule'];
        const mainModule = this.compiler.compileModuleSync(mainModuleClass).create(this.injector).instance as PluginModuleInterface;
        /*const mainModule = new mainModuleClass();
        console.log (mainModule.exposedPreviewHandlers());
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(mainModule.exposedPreviewHandlers().get('BasicEntityComponent'));

        const viewContainerRef = this.host.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory,undefined,this.injector);
        const handler = componentRef.instance as PreviewHandler;
        return handler;*/

      }).then (value => {
        loadRemoteModule({
          exposedModule:'./Fields',
          remoteEntry:'http://localhost:3000/remoteEntry.js',
          remoteName:'dontCodeStandardPlugins'
        }).then(module => {
          console.log('Loaded Module:', module);
          const mainModuleClass = module['FieldsModule'];
          const mainModule = this.compiler.compileModuleSync(mainModuleClass).create(this.injector).instance as PluginModuleInterface;
          /* new mainModuleClass();
          console.log (mainModule.exposedPreviewHandlers());
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(mainModule.exposedPreviewHandlers().get('MoneyComponent'));

          const viewContainerRef = this.host.viewContainerRef;
          viewContainerRef.clear();

          const componentRef = viewContainerRef.createComponent(componentFactory,undefined,this.injector);
          const handler = componentRef.instance as PreviewHandler;
          return handler;*/

        })
      })
    ]).then(value => {
      console.log('All loaded');
    })
  }

}
