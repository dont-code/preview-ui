import {Compiler, Component, ComponentFactoryResolver, Injector, ViewChild} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {loadRemoteModule} from "@angular-architects/module-federation-runtime";
import {PluginModuleInterface} from '@dontcode/core';
import {BaseAppComponent} from '@dontcode/sandbox';
import {RemotePluginLoaderService} from "./shared/remote-plugin-loader.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseAppComponent{

  sessionId:string|null = null;

  constructor(private primengConfig: PrimeNGConfig, protected pluginLoader:RemotePluginLoaderService, injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    super.ngOnInit();

      // To do: Get the list from the Plugin Marketplace: https://test.dont-code.net/data/Plugin%20Module
    console.log('Loading plugins from '+environment.standardPluginsUrl);
    this.pluginLoader.loadMultipleModules([{
        exposedModule: './Basic',
        remoteEntry: environment.standardPluginsUrl+'/remoteEntry.js',
        remoteName: 'dontCodeStandardPlugins',
        moduleName: 'BasicModule'
      }, {
        exposedModule: './Fields',
        remoteEntry: environment.standardPluginsUrl+'/remoteEntry.js',
        remoteName: 'dontCodeStandardPlugins',
        moduleName: 'FieldsModule'
      }
    ]).then(module => {
      console.log('All Plugins loaded');
    });

  }
}
