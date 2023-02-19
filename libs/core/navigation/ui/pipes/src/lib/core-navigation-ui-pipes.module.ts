import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationExternalPathPipe } from './navigation-external-path.pipe';
import { NavigationPathPipe } from './navigation-path.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavigationExternalPathPipe,
    NavigationPathPipe
  ],
  exports: [
    NavigationExternalPathPipe,
    NavigationPathPipe
  ],
})
export class CoreNavigationUiPipesModule {}
