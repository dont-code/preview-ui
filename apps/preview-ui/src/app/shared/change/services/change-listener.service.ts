import { Injectable } from "@angular/core";
import { Change } from "@dontcode/core";
import { Observable, ReplaySubject, Subject } from "rxjs";
import { WebSocketSubject } from "rxjs/internal-compatibility";
import { webSocket } from "rxjs/webSocket";
import { environment } from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ChangeListenerService {

  protected listOfChanges: Change[]=[];

  protected listOfEntities: Map<string, string> = new Map();

  previewServiceWebSocket: WebSocketSubject<Change>;
  protected changeEmitter = new Subject<Change> ();
  protected connectionStatus: ReplaySubject<string>=new ReplaySubject<string>(1);

  constructor() {
    this.previewServiceWebSocket = webSocket(environment.webSocketUrl);
    this.connectionStatus.next("connected");
    this.previewServiceWebSocket.subscribe(
      msg => {
        //console.log('message received: ' + msg);
        this.listOfChanges.push(msg);
        this.changeEmitter.next(msg);
      },
      // Called whenever there is a message from the server
      err => {
        //console.log(err);
        this.connectionStatus.next("ERROR:"+err);

      },
      // Called if WebSocket API signals some kind of error
      () => {
        //console.log('complete');
        this.connectionStatus.next("closed");
      }
      // Called when connection is closed (for whatever reason)
    );
  }

  getListOfChanges (): Change[] {
    return this.listOfChanges;
  }

  getChangeEvents (): Observable<Change> {
    return this.changeEmitter;
  }
  getConnectionStatus (): Observable<string> {
    return this.connectionStatus;
  }

}
