import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommandProviderService } from '../../shared/command/services/command-provider.service';
import { Subject } from 'rxjs';
import { DontCodeModel } from '../../shared/model/dont-code-model';
import { takeUntil } from 'rxjs/operators';
import { CommandType } from '../../shared/command/command';

@Component({
  selector: 'preview-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  menus:string []=[];
  unsubscriber = new Subject();

  constructor(protected provider: CommandProviderService) { }

  ngOnInit(): void {
    this.provider.receiveCommands (DontCodeModel.APP_ENTITIES).pipe(
      takeUntil(this.unsubscriber)).subscribe(command => {
      if (command.type==CommandType.ADD) {
        this.menus.push(command.value.name);
      }
    })

  }

  ngOnDestroy(): void {
    // unsubscribe to all observables
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
