import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command, CommandType } from '../command';

@Injectable({
  providedIn: 'root'
})
export class CommandProviderService {

  receivedCommands = new Observable<Command> ((observer) => {
    observer.next(new Command(CommandType.ADD, 'creation/name', 'New App' ));
    observer.next(new Command(CommandType.ADD, 'creation/entities', JSON.parse('{"name":"ToDoItem"}') ));
  });

  constructor() { }

  receiveCommands (): Observable<Command> {
    return this.receivedCommands;
  }
}
