import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
@Pipe({
  name: 'controlName',
})
export class ControlPipe implements PipeTransform {
  transform(value: AbstractControl): FormControl {
    return value as FormControl;
  }
}
