import { DontCode, Change } from '@dontcode/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NumberSymbol } from '@angular/common';

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
      parent[prop]=change.value;
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
