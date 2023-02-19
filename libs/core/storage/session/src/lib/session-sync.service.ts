import { Injectable } from '@angular/core';

import { AbstractSyncStorage, storageAvailable } from '@banshop/core/storage/common';
import { MemoryService } from '@banshop/core/storage/memory';


@Injectable({
  providedIn: 'root',
})
export class SessionSyncService extends AbstractSyncStorage {
  constructor() {
    super(storageAvailable('sessionStorage') ? window.sessionStorage : new MemoryService());
  }
}
