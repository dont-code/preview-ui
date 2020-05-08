import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { CommandProviderService } from '../../shared/command/services/command-provider.service';
import { DontCodeModel } from '../../shared/model/dont-code-model';
import {ChangeListenerService} from "../../shared/change/services/change-listener.service";

@Component({
  selector: 'preview-ui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  context$: Observable<{
    status:string
  }>;

  unsubscriber = new Subject();

  appName = 'No Name';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    protected provider:CommandProviderService,
    protected listenerService:ChangeListenerService,
    protected breakpointObserver:BreakpointObserver
  ) {}

  ngOnInit() {
    this.provider.receiveCommands (DontCodeModel.APP_NAME).pipe(
      takeUntil(this.unsubscriber)).subscribe(command => {
        this.appName = command.value;
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

}
