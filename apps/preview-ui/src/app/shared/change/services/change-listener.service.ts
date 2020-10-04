import { Injectable } from "@angular/core";
import { Change } from "@dontcode/core";
import { Observable, ReplaySubject, Subject } from "rxjs";
import { WebSocketSubject } from "rxjs/internal-compatibility";
import { webSocket } from "rxjs/webSocket";
import { environment } from "../../../../environments/environment";
import { BroadcastChannel } from "broadcast-channel";
import { DevChangePushService } from "../../dev/services/dev-change-push.service";


@Injectable({
  providedIn: 'root'
})
export class ChangeListenerService {

  protected listOfChanges: Change[]=[];

//  protected listOfEntities: Map<string, string> = new Map();

  previewServiceWebSocket: WebSocketSubject<Change>;
  protected changeEmitter = new Subject<Change> ();
  protected connectionStatus: ReplaySubject<string>=new ReplaySubject<string>(1);

  protected channel: BroadcastChannel<Change>;

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

    // Listens as well to broadcasted events
    console.log("Listening to debug broadcasts")
    this.channel = new BroadcastChannel(DevChangePushService.CHANNEL_CHANGE_NAME);
    this.channel.onmessage = msg => {
      this.listOfChanges.push(msg);
      this.changeEmitter.next(msg);
    }
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
