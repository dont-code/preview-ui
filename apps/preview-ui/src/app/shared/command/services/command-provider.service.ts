import { ValueService } from '../../values/services/value.service';
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, Subject } from "rxjs";
import { filter } from "rxjs/operators";
import {
  Change,
  ChangeType,
  CommandProviderInterface,
  DontCode,
  DontCodeModel,
  DontCodeModelPointer
} from "@dontcode/core";
import { ChangeListenerService } from "../../change/services/change-listener.service";
import dtcde = DontCode.dtcde;

@Injectable({
  providedIn: 'root'
})
export class CommandProviderService implements CommandProviderInterface {

  protected receivedCommands = new Subject<Change> ();

  constructor(protected changeListener: ChangeListenerService, protected valueService:ValueService) {
    valueService.receiveUpdatesFrom (this.receivedCommands);
    changeListener.getChangeEvents().subscribe(change => {
      // console.log ('Received Change ', change);
      this.receivedCommands.next(new Change (
        ChangeType.UPDATE, change.position,change.value,this.calculatePointerFor(change.position)
      ));
    });
  }

  getJsonAt(position: string): any {
    return this.valueService.findAtPosition (position, false);
  }

  pushCommand (newChange:Change) {
    this.receivedCommands.next(newChange);
  }

  receiveCommands (position?: string, lastItem?: string): Observable<Change> {
    if (position)
    {
      //console.log("Setting Commands updates for ", position);
      return this.receivedCommands.pipe(filter (command => {
        //console.log("Filtering position for pos,item:", command.position, position, lastItem);
        if ((command.position!=null) && (command.position.startsWith(position))) {
          if (lastItem) {
            const next=command.position.indexOf('/', position.length+1);
            if( next != -1) {
              if( command.position.startsWith(lastItem, next+1)) {
                //console.log("Filtering ok");
                return true;
              }
            }
            //console.log("Filtering no");
            return false;
          }
          //console.log("Filtering ok");
          return true;
        } else {
          //console.log("Filtering no");
          return false;
        }
      }));
    }
    else
      return this.receivedCommands;
  }

  calculatePointerFor (position:string): DontCodeModelPointer {
    const ret = dtcde.getSchemaManager().generateSchemaPointer(position);
    return ret;
  }
}
