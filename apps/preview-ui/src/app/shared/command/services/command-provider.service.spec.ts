import { TestBed } from '@angular/core/testing';

import { CommandProviderService } from './command-provider.service';

describe('CommandProviderService', () => {
  let service: CommandProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
