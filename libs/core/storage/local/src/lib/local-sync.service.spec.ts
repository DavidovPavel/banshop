import { TestBed } from '@angular/core/testing';

import { LocalSyncService } from './local-sync.service';

describe('LocalSyncService', () => {
  let service: LocalSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
