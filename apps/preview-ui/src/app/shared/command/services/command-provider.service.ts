import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command, CommandType } from '../command';
import { filter } from 'rxjs/operators';
import { DontCodeModel } from '../../model/dont-code-model';

@Injectable({
  providedIn: 'root'
})
export class CommandProviderService {

  receivedCommands = new Observable<Command> ((observer) => {
    observer.next(new Command(CommandType.ADD, DontCodeModel.APP_NAME, 'New Name' ));
    observer.next(new Command(CommandType.ADD, DontCodeModel.APP_ENTITIES, JSON.parse('{"name":"ToDoItem"}') ));
    observer.next(new Command(CommandType.ADD, DontCodeModel.APP_ENTITIES, JSON.parse('{"name":"Country"}') ));
  });

  constructor() { console.log('new ProviderService');}

  receiveCommands (position?: string): Observable<Command> {
    console.log('not stubbed');
    if (position)
    {
      return this.receivedCommands.pipe(filter (command => {
        if (command.position.startsWith(position)) {
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
