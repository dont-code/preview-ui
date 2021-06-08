import {Component, Input, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {dtcde} from "@dontcode/core";
import {IndexedDbStorageService} from "./shared/storage/services/indexed-db-storage.service";
import {ChangeListenerService} from "./shared/change/services/change-listener.service";

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'preview-ui';

  sessionId:string;

  constructor(private primengConfig: PrimeNGConfig, protected storage:IndexedDbStorageService, protected listener: ChangeListenerService) {


  }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
    dtcde.getStoreManager().setProvider(this.storage);
    this.sessionId = window['dontCodeId'];
    console.log("Browser opened with SessionId =", this.sessionId)
    this.listener.setSessionId(this.sessionId);
  }

  mainTab(): boolean {
    return window.location.hash.indexOf('/newTabDev')===-1;
  }


}
