import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Command } from '../../../shared/command/command';
import { map } from 'rxjs/operators';
import { CommandProviderService } from '../../../shared/command/services/command-provider.service';

@Component({
  selector: 'preview-ui-list-commands',
  templateUrl: './list-commands.component.html',
  styleUrls: ['./list-commands.component.css']
})
export class ListCommandsComponent implements OnInit {

  commands: Command[] = [];
  context$: Observable<any>;


  constructor(    protected providerService:CommandProviderService,
  ) { console.log('injected');}

  ngOnInit(): void {
    this.context$ = combineLatest([this.providerService.receiveCommands()])
      .pipe(map ((command) => {
        this.commands.push(command[0]);
        return {command};
      }));
  }

}
