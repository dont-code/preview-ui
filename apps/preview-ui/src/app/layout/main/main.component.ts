import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { CommandProviderService } from '../../shared/command/services/command-provider.service';
import { DontCodeModel } from '../../shared/model/dont-code-model';

@Component({
  selector: 'preview-ui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  unsubscriber = new Subject();

  appName = 'No Name';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    protected provider:CommandProviderService,
    protected breakpointObserver:BreakpointObserver
  ) {}

  ngOnInit() {
    this.provider.receiveCommands (DontCodeModel.APP_NAME).pipe(
      takeUntil(this.unsubscriber)).subscribe(command => {
        this.appName = command.value;
    })
  }
  ngOnDestroy() {
      // unsubscribe to all observables
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
