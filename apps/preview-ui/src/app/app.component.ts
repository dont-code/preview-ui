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
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {error} from "ng-packagr/lib/utils/log";

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseAppComponent {
  testUrl: string|null = null;
  testResponse: HttpResponse<string>|null = null;
  testError: string | null=null;
  testMode = false;

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
    previewMgr:DontCodePreviewManager,
    protected httpClient:HttpClient
  ) {
    super(provider, storage, listener, pluginLoader, globalPluginLoader, loaderService, changeProviderService,injector
    ,dontCodeCore, modelMgr, storeMgr, previewMgr );
      // Manages the different cases of loading the repository of plugins
    this.runtimeConfig = (window as any).dontCodeConfig;
    // To do: Get the list from the Plugin Marketplace: https://test.dont-code.net/data/Plugin%20Module
    if ((this.runtimeConfig!=null) && (this.runtimeConfig?.repositoryUrl==null)) {
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

  tryUrl() {
    if (this.testUrl!=null) {
      const coreHeaders= new HttpHeaders({
          'Access-Control-Allow-Origin':'localhost:5001',
          'Accept':'text/html'
        });

      this.subscription.add(this.httpClient.get("https://corsproxy.io/?"+encodeURIComponent(this.testUrl), {headers:coreHeaders, observe:"response", responseType:"text"}).subscribe({
        next: (value) => {
          this.testResponse=value;
          console.debug("Result for "+this.testUrl+":", this.testResponse);
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            this.testError=(error as HttpErrorResponse).message;
          } else {
            this.testError = error.toString();
          }
            console.error("Error loading testUrl "+this.testUrl+':',error);
        }
      })
      );
    }
  }
}
