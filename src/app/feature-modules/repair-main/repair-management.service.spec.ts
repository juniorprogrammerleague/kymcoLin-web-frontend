import { TestBed } from '@angular/core/testing';

import { RepairManagementService } from './repair-management.service';

describe('RepairManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairManagementService = TestBed.get(RepairManagementService);
    expect(service).toBeTruthy();
  });
});
