import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExtractFormControlPipe } from './extract-form-control.pipe';
import { ExtractFormGroupPipe } from './extract-form-group.pipe';
import { ExtractTouchedDirective } from './extract-touched.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExtractFormControlPipe,
    ExtractFormGroupPipe,
    ExtractTouchedDirective
  ],
  exports: [
    ExtractFormControlPipe,
    ExtractFormGroupPipe,
    ExtractTouchedDirective
  ],
})
export class CoreFormsExtractModule {}
