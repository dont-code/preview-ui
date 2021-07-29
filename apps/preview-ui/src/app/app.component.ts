import {Component, Injector} from '@angular/core';
import {BaseAppComponent} from "@dontcode/sandbox";
import {PrimeNGConfig} from "primeng/api";
import {mergeMap} from "rxjs/internal/operators";

@Component({
  selector: 'preview-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseAppComponent{

  sessionId:string|null = null;

  constructor(private primengConfig: PrimeNGConfig, injector:Injector ) {
    super(injector);
  }

  ngOnInit(): void {
    this.primengConfig.ripple=true;
    super.ngOnInit();
  }

}
