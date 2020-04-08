import { TestBed } from '@angular/core/testing';

import { PicnicService } from './picnic.service';

describe('PicnicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicnicService = TestBed.get(PicnicService);
    expect(service).toBeTruthy();
  });
});
