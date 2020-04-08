import { TestBed } from '@angular/core/testing';

import { RomanticService } from './romantic.service';

describe('RomanticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomanticService = TestBed.get(RomanticService);
    expect(service).toBeTruthy();
  });
});
