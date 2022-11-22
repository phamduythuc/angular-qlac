import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function checkNumber(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const rexNumber = /^[0-9]+$/g.test(value);
    return !rexNumber ? { numberError: true } : null;
  };
}
