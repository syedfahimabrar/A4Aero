import { TestBed } from '@angular/core/testing';

import { BsentityService } from './bsentity.service';

describe('BsentityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BsentityService = TestBed.get(BsentityService);
    expect(service).toBeTruthy();
  });
});
