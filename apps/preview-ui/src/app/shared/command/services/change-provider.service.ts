import {ValueService} from "../../values/services/value.service";
import {Injectable} from "@angular/core";
import {Observable, ReplaySubject, Subject, Subscription} from "rxjs";
import {Change, CommandProviderInterface, DontCodeModelPointer, DontCodeSchemaManager, dtcde, ChangeType} from "@dontcode/core";
import {ChangeListenerService} from "../../change/services/change-listener.service";

@Injectable({
  providedIn: 'root'
})
export class ChangeProviderService implements CommandProviderInterface {

  protected subscriptions = new Subscription();
  protected receivedChanges = new Subject<Change> ();
  protected changesHistory = new ReplaySubject<Change> ();

  protected listeners = new Map<{position:string, property:string}, Subject<Change>>();
  protected listenerCachePerPosition = new Map<string, Array<Subject<Change>>>();

  constructor(protected changeListener: ChangeListenerService, protected valueService:ValueService) {
    valueService.receiveUpdatesFrom (this.receivedChanges);
    this.subscriptions.add(changeListener.getChangeEvents().subscribe(change => {
      // console.log ('Received Change ', change);
      this.pushChange(change);
    })
    );
  }

  /**
   * Check if the change affects the given position
   * @param pos
   * @param change
   * @protected
   */
  protected isInterestedIn (position:string, property:string, change:Change) :boolean {
    let onlyLevel=false;
    if (position[position.length-1]==='?') {
      onlyLevel=true;
      position=position.substring(0, position.length-1);
    }
    if (position[position.length-1]==='/') {
      position=position.substring (0, position.length-1);
    }
    //console.log("Setting Commands updates for ", position);
      //console.log("Filtering position for pos,item:", command.position, position, lastItem);
    if ((change.position!=null) && (change.position.startsWith(position))) {
      let nextPosition=this.nextItemEndPosition (change.position, position.length+1)
      const nextItem=nextPosition.value;
      if (property) {
        if( nextItem===property) {
          //console.log("Filtering ok");
          return true;
        } else {
          nextPosition = this.nextItemEndPosition(change.position, nextPosition.pos+1);
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
          nextPosition = this.nextItemEndPosition(change.position, nextPosition.pos + 1);
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
  }

  protected createNewListener (position:string, property:string): Observable<Change> {
    const key = {position, property};
    let item = this.listeners.get(key);
    if (!item) {
      item = new Subject<Change> ();
      this.listeners.set(key, item);
      this.listenerCachePerPosition.clear();
    }
    return item;
  }

  protected addToListenerCache (position:string, who: Subject<Change>) {
    let interesteds = this.listenerCachePerPosition.get(position);
    if (!interesteds) {
      interesteds = new Array<Subject<Change>>();
      this.listenerCachePerPosition.set(position, interesteds);
    }

    interesteds.push(who);
  }

  getJsonAt(position: string): any {
    return this.valueService.findAtPosition (position, false);
  }

  pushChange (change:Change) {
    if (!change.pointer) {
      change.pointer = this.calculatePointerFor(change.position);
    }

    this.receivedChanges.next(change);

    this.findAndNotify ( change);

    this.changesHistory.next(change);
  }

  findAndNotify ( change:Change) {

    // First resolve the position and cache it
    if ( !this.listenerCachePerPosition.get(change.position)) {
      this.listeners.forEach((value, key) => {
        if (this.isInterestedIn (key.position,key.property, change)) {
          this.addToListenerCache (change.position, value);
        }
      });
    }

    const affected = this.listenerCachePerPosition.get(change.position);
    affected?.forEach(subject => {
      subject.next(change);
    });

    if( change.type===ChangeType.RESET) {
        // Notify the elements that are listening to children
      if (!change.value) {
        // We are resetting from a certain position, so all listeners after this position must be tell there are no values anymore
        let resetPosition = change.position;
        if (resetPosition==="/") resetPosition="creation";

        this.listeners.forEach((value, key) => {
          if (key.position.startsWith(resetPosition)) {
            value.next(new Change (ChangeType.RESET, this.cleanPosition (key.position), null));
          }
        });
      } else if( typeof (change.value)==='object') {
        for (const subProp in change.value) {
          if (change.value.hasOwnProperty(subProp)) {
            this.findAndNotify( this.morphChangeToChild(change, subProp));
          }
        }
      }
    }

  }

  morphChangeToChild (change:Change, child:string ): Change {
    const newPointer = this.getSchemaManager().generateSubSchemaPointer(change.pointer, child);
    const newChange=new Change(change.type, newPointer.position, change.value[child], newPointer );

    return newChange;
  }

  getChangesHistory (): Observable<Change> {
    return this.changesHistory;
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
      return this.createNewListener (position, property);
    }
    else
      return this.receivedChanges;
  }

  getSchemaManager (): DontCodeSchemaManager {
    return dtcde.getSchemaManager();
  }

  calculatePointerFor (position:string): DontCodeModelPointer {
    const ret = dtcde.getSchemaManager().generateSchemaPointer(position);
    return ret;
  }

  close() {
    this.receivedChanges.complete();
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
    if( posSlash!==-1)
      value = position.substring(from, posSlash+1);

    return {
      pos: posSlash,
      value: value
    }
  }

  /**
   * Removes ? or / from end of position
   * @param position
   * @private
   */
  private cleanPosition(position: string): string {
    position = position.endsWith('?')?position.substring(0, position.length-1):position;
    position = position.endsWith('/')?position.substring(0, position.length-1):position;
    return position;
  }
}
