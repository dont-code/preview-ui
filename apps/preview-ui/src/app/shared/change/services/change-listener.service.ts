import { Injectable } from '@angular/core';
import { Change } from '../change';
import { Observable, Subject } from 'rxjs';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { webSocket } from 'rxjs/webSocket';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChangeListenerService {

  protected listOfChanges: Change[]=[];

  protected listOfEntities: Map<string, string> = new Map();

  myWebSocket: WebSocketSubject<Change>;
  protected changeEmitter = new Subject<Change> ();

  constructor() {
    this.myWebSocket = webSocket(environment.webSocketUrl);
    this.myWebSocket.subscribe(
      msg => {
        console.log('message received: ' + msg);
        this.listOfChanges.push(msg);
        this.changeEmitter.next(msg);
      },
      // Called whenever there is a message from the server
      err => console.log(err),
      // Called if WebSocket API signals some kind of error
      () => console.log('complete')
      // Called when connection is closed (for whatever reason)
    );
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }

  getChangeEvents (): Observable<Change> {
    return this.changeEmitter;
  }
}
