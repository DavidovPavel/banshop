import { Injectable } from '@angular/core';

import { AbstractAsyncStorage } from '@banshop/core/storage/common';

import { SessionSyncService } from './session-sync.service';

@Injectable({
  providedIn: 'root'
})
export class SessionAsyncService extends AbstractAsyncStorage {

  constructor(private readonly localSyncStorage: SessionSyncService) {
    super(localSyncStorage);
  }
}
