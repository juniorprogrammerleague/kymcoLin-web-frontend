import { TestBed } from '@angular/core/testing';

import { RepairSearchService } from './repair-search.service';

describe('RepairSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairSearchService = TestBed.get(RepairSearchService);
    expect(service).toBeTruthy();
  });
});
