import { ChangeType } from '@dontcode/core';
import { TestBed } from '@angular/core/testing';

import { CommandProviderService } from './command-provider.service';
import { Change } from '@dontcode/core';

describe('CommandProviderService', () => {
  let service: CommandProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should updates content from changes', () => {
    service.pushCommand (new Change (ChangeType.UPDATE, 'creation/name', 'NewName'));
    expect (service.getJsonAt('creation')).toHaveProperty ('name', "NewName");
  });
});
