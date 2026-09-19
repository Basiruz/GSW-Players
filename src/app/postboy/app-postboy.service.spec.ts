import { TestBed } from '@angular/core/testing';

import { AppPostboyService } from './app-postboy.service';

describe('AppPostboyService', () => {
  let service: AppPostboyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPostboyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
