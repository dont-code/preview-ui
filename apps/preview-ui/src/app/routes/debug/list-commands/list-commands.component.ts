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
  context$: Observable<{command: Command}>;

  /**
   * Dont update for the first item sent by providerservice
   */
  protected forgetIt = true;


  constructor(    protected providerService:CommandProviderService,
  ) { }

  ngOnInit(): void {
    console.log("ListCommands");
    this.context$ = combineLatest([this.providerService.receiveCommands()])
      .pipe(map ((command) => {
        if( this.forgetIt) {
          this.forgetIt=false;
        } else {
          this.commands.push(command[0]);
        }
        return {command:command[0]};
      }));
  }

  noCommands(): boolean {
    return  this.commands.length==0;
  }
}
