import { TestBed } from '@angular/core/testing';

import { RepairDetailService } from './repair-detail.service';

describe('RepairDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairDetailService = TestBed.get(RepairDetailService);
    expect(service).toBeTruthy();
  });
});
