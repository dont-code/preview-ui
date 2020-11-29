import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'preview-ui';

  constructor(private primengConfig: PrimeNGConfig) {

  }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
  }

  mainTab(): boolean {
    return window.location.hash.indexOf('/newTabDev')==-1;
  }


}
