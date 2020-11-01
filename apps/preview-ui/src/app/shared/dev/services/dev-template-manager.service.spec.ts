import { TestBed } from '@angular/core/testing';

import { DevTemplateManagerService } from './dev-template-manager.service';

describe('DevTemplateManagerService', () => {
  let service: DevTemplateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevTemplateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
