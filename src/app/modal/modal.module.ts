import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCompComponent } from './modal-comp/modal-comp.component';

@NgModule({
  declarations: [ModalCompComponent],
  imports: [CommonModule],
  exports: [ModalCompComponent],
})
export class ModalModule {}
