import { Injectable } from '@angular/core';

import { AbstractAsyncStorage } from '@banshop/core/storage/common';

import { LocalSyncService } from './local-sync.service';

@Injectable({
  providedIn: 'root',
})
export class LocalAsyncService extends AbstractAsyncStorage {
  constructor(private readonly loacalSyncStorage: LocalSyncService) {
    super(loacalSyncStorage);
  }
}
