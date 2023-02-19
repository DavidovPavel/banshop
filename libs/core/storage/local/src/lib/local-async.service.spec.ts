import { TestBed } from '@angular/core/testing';

import { LocalAsyncService } from './local-async.service';

describe('LocalAsyncService', () => {
  let service: LocalAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
