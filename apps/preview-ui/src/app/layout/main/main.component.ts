import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { combineLatest, Observable, Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { ChangeProviderService } from "../../shared/command/services/change-provider.service";
import { ChangeListenerService } from "../../shared/change/services/change-listener.service";
import { DontCodeModel } from "@dontcode/core";

@Component({
  selector: 'preview-ui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, OnDestroy {

  context$: Observable<{
    status:string
  }>;

  unsubscriber = new Subject();

  appName = 'No Name';

  sidePanelVisible: boolean;

  constructor(
    protected provider:ChangeProviderService,
    protected listenerService:ChangeListenerService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.sidePanelVisible = true;
    this.provider.receiveCommands (DontCodeModel.APP_NAME).pipe(
      takeUntil(this.unsubscriber)).subscribe(command => {
        this.appName = command.value;
        this.ref.detectChanges();
    });
    this.context$ = combineLatest([this.listenerService.getConnectionStatus()])
      .pipe(map ((status) => {
        return {status:status[0]};
      }));
  }
  ngOnDestroy() {
      // unsubscribe to all observables
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  logoClicked() {
    this.sidePanelVisible=true;
  }

  sidePanelVisibleChanged($event: any) {
    //console.log($event);
    this.sidePanelVisible=$event.target.visible;
  }

  openDevUrl() {
    window.open('#/newTabDev', '_blank');
  }

  connectedClass(ctx: { status: string }): string {
    if( ctx.status!=="connected") {
      return "p-button-danger";
    }
  }
}
