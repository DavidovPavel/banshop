import { Injectable } from '@angular/core';

import { AbstractSyncStorage, storageAvailable } from '@banshop/core/storage/common';
import { MemoryService } from '@banshop/core/storage/memory';

@Injectable({
  providedIn: 'root',
})
export class LocalSyncService extends AbstractSyncStorage {
  constructor() {
    super(storageAvailable('localStorage') ? window.localStorage : new MemoryService());
  }
}
