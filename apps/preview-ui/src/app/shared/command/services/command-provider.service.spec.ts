import { ChangeType } from '@dontcode/core';
import { TestBed } from '@angular/core/testing';

import { CommandProviderService } from './command-provider.service';
import { Change } from '@dontcode/core';
import { Subscription } from 'rxjs';

describe('CommandProviderService', () => {
  let service: CommandProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate next item', () => {
    let testPosition="creation/screens/a/components/b";
    expect(service.nextItemEndPosition(testPosition, 0)).toEqual({pos:7, value:"creation"});
    let result=service.nextItemEndPosition(testPosition, "creation".length);
    expect(result).toEqual({pos:15, value:"screens"});
    result = service.nextItemEndPosition(testPosition, result.pos+1);
    expect(result).toEqual({pos:17, value:"a"});
    result = service.nextItemEndPosition(testPosition, result.pos+1);
    expect(result).toEqual({pos:28, value:"components"});

    expect(service.nextItemEndPosition(testPosition, "creation/screens/a/".length)).toEqual({pos:28, value:"components"});
    expect(service.nextItemEndPosition(testPosition, "creation/screens/a/components".length)).toEqual({pos:30, value:"b"});
    expect(service.nextItemEndPosition(testPosition, "creation/screens/a/components/".length)).toEqual({pos:30, value:"b"});
  });

  it('should updates content from changes', () => {
    service.pushCommand (new Change (ChangeType.UPDATE, 'creation/name', 'NewName'));
    expect (service.getJsonAt('creation')).toHaveProperty ('name', "NewName");
  });

  it('should filter properly', () => {
    let subscriptions = new Subscription();
    const notified = jest.fn();
    try {
      subscriptions.add(service.receiveCommands('creation/screens', 'name').subscribe(
        notified
      ));
      service.pushCommand (new Change (ChangeType.UPDATE, 'creation/name', 'NewName'));
      expect(notified).toHaveBeenCalledTimes(0);
      service.pushCommand (new Change (ChangeType.ADD, 'creation/screens/a/name', 'NewName'));
      expect(notified).toHaveBeenCalledTimes(1);
      subscriptions.unsubscribe();

      subscriptions = new Subscription();
      subscriptions.add(service.receiveCommands('creation/screens').subscribe(
        notified
      ));
      service.pushCommand (new Change (ChangeType.ADD, 'creation/screens/b', '{\"name\"=\"NewName\"}'));
      expect(notified).toHaveBeenCalledTimes(2);
      service.pushCommand (new Change (ChangeType.UPDATE, 'creation/screens/b/name', 'NewName'));
      expect(notified).toHaveBeenCalledTimes(3);
      service.pushCommand (new Change (ChangeType.ADD, 'creation/screens/b/components/b/name', '{\"name\"=\"NewComp\"}'));
      expect(notified).toHaveBeenCalledTimes(4);
      subscriptions.unsubscribe();

      subscriptions = new Subscription();
      subscriptions.add(service.receiveCommands('creation/screens/?').subscribe(
        notified
      ));
      service.pushCommand (new Change (ChangeType.ADD, 'creation/screens/a/name', 'NewName'));
      expect(notified).toHaveBeenCalledTimes(4);
      service.pushCommand (new Change (ChangeType.DELETE, 'creation/screens/b', null));
      expect(notified).toHaveBeenCalledTimes(5);
      subscriptions.unsubscribe();

      subscriptions = new Subscription();
      subscriptions.add(service.receiveCommands('creation/screens/?', 'name').subscribe(
        notified
      ));
      service.pushCommand (new Change (ChangeType.ADD, 'creation/screens/a/name', 'NewName'));
      expect(notified).toHaveBeenCalledTimes(6);
      service.pushCommand (new Change (ChangeType.DELETE, 'creation/screens/b', null));
      expect(notified).toHaveBeenCalledTimes(6);
      service.pushCommand (new Change (ChangeType.ADD, 'creation/screens/b/components/c/name', 'CompName'));
      expect(notified).toHaveBeenCalledTimes(6);
    } finally {
      subscriptions.unsubscribe();
      service.close();
    }
  });
});
