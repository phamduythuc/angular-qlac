import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlPipe } from './control.pipe';
import { SelectGenderComponent } from './select-gender/select-gender.component';
import { ModalModule } from '../modal/modal.module';
@NgModule({
  declarations: [
    FormComponent,
    InputComponent,
    ControlPipe,
    SelectGenderComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ModalModule],
  exports: [FormComponent],
})
export class AddFormModule {}
