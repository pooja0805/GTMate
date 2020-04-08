import { TestBed } from '@angular/core/testing';

import { BeachService } from './beach.service';

describe('BeachService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeachService = TestBed.get(BeachService);
    expect(service).toBeTruthy();
  });
});
