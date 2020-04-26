import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Command, CommandType } from '../command';
import { filter } from 'rxjs/operators';
import { DontCodeModel } from '../../model/dont-code-model';
import { ChangeListenerService } from '../../change/services/change-listener.service';

@Injectable({
  providedIn: 'root'
})
export class CommandProviderService {

  protected receivedCommands = new ReplaySubject<Command> ();

  constructor(protected changeListener: ChangeListenerService) {
    this.receivedCommands.next(new Command(CommandType.ADD, DontCodeModel.APP_NAME, 'New Name' ));
    this.receivedCommands.next(new Command(CommandType.ADD, DontCodeModel.APP_ENTITIES, JSON.parse('{"name":"ToDoItem"}') ));
    this.receivedCommands.next(new Command(CommandType.ADD, DontCodeModel.APP_ENTITIES, JSON.parse('{"name":"Country"}') ));
    changeListener.getChangeEvents().subscribe(change => {
      console.log ('Received Change ', change);
      this.receivedCommands.next(new Command (
        CommandType.UPDATE, change.position, change.value
      ))
    });
  }

  receiveCommands (position?: string): Observable<Command> {
    if (position)
    {
      return this.receivedCommands.pipe(filter (command => {
        if (command.position.startsWith(position)) {
          return true;
        } else {
          return false;
        }
      }))
    }
    else
      return this.receivedCommands;
  }
}
