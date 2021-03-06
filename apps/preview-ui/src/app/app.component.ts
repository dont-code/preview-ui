import {Component, getModuleFactory, InjectionToken, Injector, OnDestroy, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {ChangeType, DontCodeModel, DontCodeStoreProvider, dtcde, PluginModuleInterface} from "@dontcode/core";
import {IndexedDbStorageService} from "./shared/storage/services/indexed-db-storage.service";
import {ChangeListenerService} from "./shared/change/services/change-listener.service";
import {ChangeProviderService} from "./shared/command/services/change-provider.service";
import {EMPTY, empty, Observable, of, Subscription} from "rxjs";
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  protected subscription = new Subscription();
  title = 'preview-ui';

  sessionId:string;

  constructor(private primengConfig: PrimeNGConfig, protected storage:IndexedDbStorageService, protected listener: ChangeListenerService, protected provider: ChangeProviderService, protected injector:Injector) {


  }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
    dtcde.getStoreManager().setProvider(this.storage);
    this.sessionId = window['dontCodeId'];
    console.log("Browser opened with SessionId =", this.sessionId)
    this.listener.setSessionId(this.sessionId);
    this.subscription.add(this.provider.receiveCommands(DontCodeModel.APP_SHARING, DontCodeModel.APP_SHARING_WITH_NODE).pipe (mergeMap(change => {
      if (change.type!== ChangeType.DELETE) {
        if (change.value==="no-one") {
          dtcde.getStoreManager().setProvider(this.storage);
          return EMPTY;
        } else if (change.value) {
          return this.loadStoreManager(DontCodeModel.APP_SHARING_WITH);
        } else {
          return EMPTY;
        }
      }
    }), map (storeProvider => {
      if( storeProvider) {
        Injector.create({providers:[storeProvider]});
        dtcde.getStoreManager().setProvider(this.injector.get(storeProvider));
      }
      return storeProvider;
    })).subscribe({ error (error) {
      console.log ("Cannot load StoreProvider due to", error);
    }}));
  }

  loadStoreManager (position: string) : Observable<any> {
    const previewMgr = dtcde.getPreviewManager();
    const currentJson = this.provider.getJsonAt(position);

    const handler = previewMgr.retrieveHandlerConfig(position, currentJson);

    if (handler) {
      console.log("Importing StoreManager from ", handler.class.source);
      try {
        // First lets try if the plugin is imported during the compilation
        const module: PluginModuleInterface = getModuleFactory('dontcode-plugin/' + handler.class.source).create(null).instance;
        const providerClass =  module.exposedPreviewHandlers().get(handler.class.name);
        console.log("Provider Class found", providerClass);

        return of(providerClass);

      } catch (e) {
        // Nope, fallback to dynamically loading it
      }

    }
    return EMPTY;
  }

  mainTab(): boolean {
    return window.location.hash.indexOf('/newTabDev')===-1;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
