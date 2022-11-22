import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanigationComponent } from './panigation.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [PanigationComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PanigationComponent],
})
export class PanigationModule {}
