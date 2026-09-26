import { TestBed } from '@angular/core/testing';

import { AppMessageRegistrator } from './app-message-registrator.service';

describe('AppMessageRegistrator', () => {
  let service: AppMessageRegistrator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppMessageRegistrator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
