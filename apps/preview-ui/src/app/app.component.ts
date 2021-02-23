import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {dtcde} from "@dontcode/core";
import {IndexedDbStorageService} from "./shared/storage/services/indexed-db-storage.service";

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'preview-ui';

  constructor(private primengConfig: PrimeNGConfig, protected storage:IndexedDbStorageService) {

  }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
    dtcde.getStoreManager().setProvider(this.storage);
  }

  mainTab(): boolean {
    return window.location.hash.indexOf('/newTabDev')===-1;
  }


}
