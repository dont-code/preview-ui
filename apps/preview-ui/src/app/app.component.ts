import {Component, Injector} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {BaseAppComponent, ChangeListenerService, IndexedDbStorageService} from '@dontcode/sandbox';
import {RemotePluginLoaderService} from '@dontcode/sandbox';
import {environment} from '../environments/environment';
import { ChangeProviderService } from '@dontcode/sandbox';
import { GlobalPluginLoader } from '@dontcode/sandbox';
import {ComponentLoaderService} from "@dontcode/plugin-common";
import {dtcde} from "@dontcode/core";

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseAppComponent {

  constructor(
    private primengConfig: PrimeNGConfig,
    protected pluginLoader: RemotePluginLoaderService,
    provider: ChangeProviderService,
    storage:IndexedDbStorageService,
    listener:ChangeListenerService,
    globalPluginLoader:GlobalPluginLoader,
    loaderService: ComponentLoaderService,
    injector:Injector) {
    super(provider, storage, listener,globalPluginLoader, loaderService, injector);
  }

  override ngOnInit(): void {
    this.primengConfig.ripple = true;
    super.ngOnInit();

    // To do: Get the list from the Plugin Marketplace: https://test.dont-code.net/data/Plugin%20Module
    console.log('Loading plugins from ' + environment.standardPluginsUrl);
    this.pluginLoader
      .loadMultipleModules([
        {
          type:'module',
          exposedModule: './Basic',
          remoteEntry: environment.standardPluginsUrl + '/remoteEntry.mjs',
          moduleName: 'BasicModule',
        },
        {
          type:'module',
          exposedModule: './Fields',
          remoteEntry: environment.standardPluginsUrl + '/remoteEntry.mjs',
          moduleName: 'FieldsModule',
        },
        {
          type:'module',
          exposedModule: './Rest',
          remoteEntry:
            (environment.otherPluginsUrl != null
              ? environment.otherPluginsUrl + 'rest'
              : environment.restPluginUrl) + '/remoteEntry.mjs',
          moduleName: 'RestModule',
        },
      ])
      .then(() => {
        // eslint-disable-next-line no-restricted-syntax
        console.info('Dynamic Plugins loaded');

        dtcde.initPlugins ();
        // eslint-disable-next-line no-restricted-syntax
        console.info('Dynamic Plugins inited');
        // Check if we need to load a project ?
        const projectToLoad = (window as any).dontCodeConfig.projectId;
        if (projectToLoad) {
          this.listener.loadProject(projectToLoad).then((project) => {
            console.log('Loaded project ', project.name);
          });
        }
      });
  }
}
