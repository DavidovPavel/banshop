import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImageModule } from '@banshop/ui/image';

import { CarouselSlideComponent } from './carousel-slide.component';

@NgModule({
  declarations: [CarouselSlideComponent],
  imports: [CommonModule, ImageModule],
  exports: [CarouselSlideComponent],
})
export class CarouselSlideModule {}
