import { Change, ChangeType } from "@dontcode/core";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  constructor() {

  }

  protected content: any;

  getContent (): any {
    return this.content;
  }

  resetContent (newContent: any) {
    this.content = newContent;
  }

  receiveUpdatesFrom(receivedCommands: Subject<Change>) {
    receivedCommands.subscribe (change => {
      const parentPos = change.position.substring (0, change.position.lastIndexOf ('/'));
      const prop = change.position.substring (change.position.lastIndexOf ('/')+1);
      const parent = this.findAtPosition (parentPos, true);
      switch (change.type) {
        case ChangeType.ADD:
        case ChangeType.UPDATE:
        case ChangeType.RESET:
          parent[prop]=change.value;
          break;
        case ChangeType.DELETE:
          delete parent[prop];
          break;
        case ChangeType.MOVE:
          const oldParentPos = change.oldPosition.substring (0, change.oldPosition.lastIndexOf ('/'));
          const oldProp = change.oldPosition.substring (change.oldPosition.lastIndexOf ('/')+1);
          const oldParent = this.findAtPosition (oldParentPos, false);

            // If needed, ensure the order of property is correct in target
          const val = oldParent[oldProp];
          delete oldParent[oldProp];
          if (change.beforeKey) {
            const keys=Object.keys(parent);
            for (let key of keys) {
              const copy=parent[key];
              delete parent[key];
              if (key===change.beforeKey) {
                parent[prop]=val;
              }
              parent[key]=copy;
            }
          } else {
            parent[prop]=val;
          }
          break;
      }
    }

    )
  }

  findAtPosition (position:string, create?:boolean): any {

    const path=position.split ('/');
    if (this.content == null) {
      if( create) {
        this.content = {
          creation: {
            type:'application',
            name:'unknown'
          }
        }
      } else {
        return null;
      }
    }

    let current = this.content;

    path.forEach(element => {
      if (! current[element]) {
        if (create) {
          current[element]={};
        } else
        {
          return null;
        }
      }

      current = current[element];
    });
    return current;
  }

}
