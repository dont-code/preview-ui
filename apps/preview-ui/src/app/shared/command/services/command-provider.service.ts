import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command, CommandType } from '../command';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandProviderService {

  receivedCommands = new Observable<Command> ((observer) => {
    observer.next(new Command(CommandType.ADD, 'creation/name', 'New Old App' ));
    observer.next(new Command(CommandType.ADD, 'creation/entities', JSON.parse('{"name":"ToDoItem"}') ));
  });

  constructor() { }

  receiveCommands (position?: string): Observable<Command> {
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
