import {Component, Inject, Injector} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {
  BaseAppComponent,
  ChangeListenerService,
  ChangeProviderService,
  GlobalPluginLoader,
  IndexedDbStorageService,
  RemotePluginLoaderService
} from '@dontcode/sandbox';
import {environment} from '../environments/environment';
import {ComponentLoaderService, DONT_CODE_CORE} from "@dontcode/plugin-common";
import {Core, DontCodeModelManager, DontCodePreviewManager, DontCodeStoreManager} from "@dontcode/core";

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseAppComponent {

  constructor(
    private primengConfig: PrimeNGConfig,
    pluginLoader: RemotePluginLoaderService,
    provider: ChangeProviderService,
    storage:IndexedDbStorageService,
    listener:ChangeListenerService,
    globalPluginLoader:GlobalPluginLoader,
    loaderService: ComponentLoaderService,
    changeProviderService: ChangeProviderService,
    injector:Injector,
    @Inject(DONT_CODE_CORE)
    dontCodeCore: Core,
    modelMgr:DontCodeModelManager,
    storeMgr:DontCodeStoreManager,
    previewMgr:DontCodePreviewManager
  ) {
    super(provider, storage, listener, pluginLoader, globalPluginLoader, loaderService, changeProviderService,injector
    ,dontCodeCore, modelMgr, storeMgr, previewMgr );
      // Manages the different cases of loading the repository of plugins
    this.runtimeConfig = (window as any).dontCodeConfig;
    // To do: Get the list from the Plugin Marketplace: https://test.dont-code.net/data/Plugin%20Module
    if (this.runtimeConfig.repositoryUrl==null) {
      this.runtimeConfig.repositoryUrl=environment.repositoryUrl;
    }
  }

  override ngOnInit(): void {
    this.primengConfig.ripple = true;
    super.ngOnInit();

    // Wait for all plugins to be loaded before loading the project
    this.pluginsLoaded?.then (() => {
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
