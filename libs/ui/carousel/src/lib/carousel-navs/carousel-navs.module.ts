import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CarouselNavsComponent } from './carousel-navs.component';

@NgModule({
  declarations: [CarouselNavsComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [CarouselNavsComponent],
})
export class CarouselNavsModule {}
