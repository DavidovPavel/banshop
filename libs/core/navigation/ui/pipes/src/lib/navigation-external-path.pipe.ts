import { Pipe, PipeTransform } from '@angular/core';

import { ApiService } from '@banshop/core/api';
import { NavigationService } from '@banshop/core/navigation/service';

@Pipe({
  name: 'navigationExternalPath',
})
export class NavigationExternalPathPipe implements PipeTransform {
  constructor(private readonly navigationService: NavigationService, private readonly apiService: ApiService) {}

  transform(path: string, params?: Record<string, string | number>): string {
    return this.apiService.makeUrl(this.navigationService.getRoute(path, params).join('/').slice(1));
  }
}
