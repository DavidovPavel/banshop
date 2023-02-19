import { TestBed } from '@angular/core/testing';

import { SessionAsyncService } from './session-async.service';

describe('SessionAsyncService', () => {
  let service: SessionAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
