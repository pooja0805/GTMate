import { TestBed } from '@angular/core/testing';

import { WaterfallService } from './waterfall.service';

describe('WaterfallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaterfallService = TestBed.get(WaterfallService);
    expect(service).toBeTruthy();
  });
});
