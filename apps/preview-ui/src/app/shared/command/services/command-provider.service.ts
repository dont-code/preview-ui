import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Command, CommandType } from '../command';
import { filter, last } from 'rxjs/operators';
import { DontCodeModel } from '@dontcode/core';
import { ChangeListenerService } from '../../change/services/change-listener.service';

@Injectable({
  providedIn: 'root'
})
export class CommandProviderService {

  protected receivedCommands = new ReplaySubject<Command> ();

  constructor(protected changeListener: ChangeListenerService) {
    this.receivedCommands.next(new Command(CommandType.ADD, DontCodeModel.APP_NAME, 'New Name' ));
/*    this.receivedCommands.next(new Command(CommandType.ADD, DontCodeModel.APP_ENTITIES+"/a/name", "ToDoItem"));
    this.receivedCommands.next(new Command(CommandType.ADD, DontCodeModel.APP_ENTITIES+"/b/name","Country"));*/
    changeListener.getChangeEvents().subscribe(change => {
      console.log ('Received Change ', change);
      this.receivedCommands.next(new Command (
        CommandType.UPDATE, change.position, change.value
      ))
    });
  }

  receiveCommands (position?: string, lastItem?: string): Observable<Command> {
    if (position)
    {
      return this.receivedCommands.pipe(filter (command => {
        if (command.position.startsWith(position)) {
          if (lastItem) {
            const next=command.position.indexOf('/', position.length+1);
            if( next != -1) {
              if( command.position.startsWith(lastItem, next+1)) {
                return true;
              }
            }
            return false;
          }
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
