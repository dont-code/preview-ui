import { Injectable } from '@angular/core';
import { Change } from '../change';
import { Observable, Subject } from 'rxjs';
import {BroadcastChannel} from 'broadcast-channel';

@Injectable({
  providedIn: 'root'
})
export class ChangeListenerService {

  public static readonly CHANNEL_CHANGE_NAME='ide-ui-changes';

  protected channel: BroadcastChannel<Change>;
  protected listOfChanges: Change[]=[];

  protected changeEmitter = new Subject<Change> ();

  constructor() {
    this.channel = new BroadcastChannel(ChangeListenerService.CHANNEL_CHANGE_NAME);
    console.log('Channel receiver created');
    this.channel.onmessage = msg => {
//      console.log('Change received',msg, this.listOfChanges.length);
      this.listOfChanges.push(msg);
      this.changeEmitter.next(msg);
    };
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }

  getChangeEvents (): Observable<Change> {
    return this.changeEmitter;
  }
}
