import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { Change, ChangeType, CommandProviderInterface, DontCodeModel } from "@dontcode/core";
import { ChangeListenerService } from "../../change/services/change-listener.service";

@Injectable({
  providedIn: 'root'
})
export class CommandProviderService implements CommandProviderInterface {

  protected receivedCommands = new Subject<Change> ();

  constructor(protected changeListener: ChangeListenerService) {
/*    this.receivedCommands.next(new Change(ChangeType.ADD, DontCodeModel.APP_NAME, 'New Name' ));
    this.receivedCommands.next(new Command(CommandType.ADD, DontCodeModel.APP_ENTITIES+"/a/name", "ToDoItem"));
    this.receivedCommands.next(new Command(CommandType.ADD, DontCodeModel.APP_ENTITIES+"/b/name","Country"));*/
    changeListener.getChangeEvents().subscribe(change => {
      console.log ('Received Change ', change);
      this.receivedCommands.next(new Change (
        ChangeType.UPDATE, change.position, change.value
      ))
    });
  }

  pushCommand (newChange:Change) {
    this.receivedCommands.next(newChange);
  }

  receiveCommands (position?: string, lastItem?: string): Observable<Change> {
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
