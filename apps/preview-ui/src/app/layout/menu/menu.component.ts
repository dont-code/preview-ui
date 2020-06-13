import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommandProviderService } from '../../shared/command/services/command-provider.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DontCodeModel } from '@dontcode/core';
import { Router } from "@angular/router";

@Component({
  selector: 'preview-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, OnDestroy {

  menus:Map<string, string>=new Map();
  unsubscriber = new Subject();

  constructor(protected provider: CommandProviderService,
              private ref: ChangeDetectorRef, protected router: Router) { }

  ngOnInit(): void {
    this.provider.receiveCommands (DontCodeModel.APP_ENTITIES, DontCodeModel.APP_ENTITIES_NAME_NODE).pipe(
      takeUntil(this.unsubscriber)).subscribe(command => {
        this.menus.set(command.position, command.value);
        this.ref.detectChanges();
    })

  }

  ngOnDestroy(): void {
    // unsubscribe to all observables
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  gotoDevPage() {
    this.router.navigate(['dev']);
  }

  gotoHomePage() {
    this.router.navigate(['/']);
  }
}

class MenuItem {
  constructor(position: string, name: string) {
    this.entity = position;
    this.name=name;
  }

  public entity:string;
  public name:string;
}
