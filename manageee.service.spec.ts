import { TestBed } from '@angular/core/testing';

import { ManageeeService } from './manageee.service';

describe('ManageeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageeeService = TestBed.get(ManageeeService);
    expect(service).toBeTruthy();
  });
});
