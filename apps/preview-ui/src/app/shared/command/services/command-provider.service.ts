import { ValueService } from "../../values/services/value.service";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, Subject, Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import {
  Change,
  CommandProviderInterface,
  DontCode,
  DontCodeModelPointer,
  DontCodeSchemaManager
} from "@dontcode/core";
import { ChangeListenerService } from "../../change/services/change-listener.service";
import dtcde = DontCode.dtcde;

@Injectable({
  providedIn: 'root'
})
export class CommandProviderService implements CommandProviderInterface {

  protected subscriptions = new Subscription();
  protected receivedCommands = new Subject<Change> ();
  protected allCommands = new ReplaySubject<Change> ();

  constructor(protected changeListener: ChangeListenerService, protected valueService:ValueService) {
    valueService.receiveUpdatesFrom (this.receivedCommands);
    this.subscriptions.add(changeListener.getChangeEvents().subscribe(change => {
      // console.log ('Received Change ', change);
      if (!change.pointer) {
        change.pointer = this.calculatePointerFor(change.position);
      }
      this.receivedCommands.next(change);
      this.allCommands.next(change);
    })
    );
  }

  getJsonAt(position: string): any {
    return this.valueService.findAtPosition (position, false);
  }

  pushCommand (newChange:Change) {
    this.receivedCommands.next(newChange);
    this.allCommands.next(newChange);
  }

  getAllCommands (): Observable<Change> {
    return this.allCommands;
  }

  /**
   * Be notified when something changes in the model at the following position
   * for example:
   * position: /creation/screens, property: name will be notified of all name changes for all screen
   * position: /creation/screens, property: null will be notified of any change in any screen and subscreens
   * position: /creation/screens/a, property: null will be notified on changes in screen a and below
   * position: /creation/screens/?, property: null will be notified on changes in screen items (move, delete), and not below
   * position: null, property: null will be notified on all changes
   * @param position
   * @param property
   */
  receiveCommands (position?: string, property?: string): Observable<Change> {
    if (position)
    {
      let onlyLevel=false;
      if (position[position.length-1]==='?') {
        onlyLevel=true;
        position=position.substring(0, position.length-1);
      }
      if (position[position.length-1]==='/') {
        position=position.substring (0, position.length-1);
      }
      //console.log("Setting Commands updates for ", position);
      return this.receivedCommands.pipe(filter (command => {
        //console.log("Filtering position for pos,item:", command.position, position, lastItem);
        if ((command.position!=null) && (command.position.startsWith(position))) {
          let nextPosition=this.nextItemEndPosition (command.position, position.length+1)
          const nextItem=nextPosition.value;
          if (property) {
              if( nextItem===property) {
                //console.log("Filtering ok");
                return true;
              } else {
                nextPosition = this.nextItemEndPosition(command.position, nextPosition.pos+1);
                if (nextPosition.value===property) {
                  return true;
                }
              }
            //console.log("Filtering no");
            return false;
          } else if (onlyLevel) {
          //console.log("Filtering ok");
            if( nextItem!=null) {
                // Check if its the last item
              nextPosition = this.nextItemEndPosition(command.position, nextPosition.pos + 1);
              if (nextPosition.value === "")
                return true;
              }
            return false;
          } else {
            return true;
          }
        } else {
          //console.log("Filtering no");
          return false;
        }
      }));
    }
    else
      return this.receivedCommands;
  }

  getSchemaManager (): DontCodeSchemaManager {
    return dtcde.getSchemaManager();
  }

  calculatePointerFor (position:string): DontCodeModelPointer {
    const ret = dtcde.getSchemaManager().generateSchemaPointer(position);
    return ret;
  }

  close() {
    this.receivedCommands.complete();
    this.subscriptions.unsubscribe();
  }

  nextItemEndPosition(position: string, from: number): {pos:number, value:string} {
    let posSlash = position.indexOf("/", from);
    if (posSlash===from) {
      from = from +1;
      posSlash = position.indexOf("/", from);
    }
    if(posSlash!==-1)
      posSlash=posSlash-1;
    else {
      if (posSlash===from) {
        posSlash=-1;
      } else {
        posSlash=position.length-1;
      }
    }

    let value=null;
    if( posSlash!=-1)
      value = position.substring(from, posSlash+1);

    return {
      pos: posSlash,
      value: value
    }
  }
}
