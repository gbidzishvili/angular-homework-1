// import { FormGroup } from '@angular/forms';

// export function ConfirmedValidator(
//   controlName: string,
//   matchingControlName: string
// ) {
//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];
//     if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
//       return;
//     }
//     if (control.value !== matchingControl.value) {
//       matchingControl.setErrors({ confirmedValidator: true });
//     } else {
//       matchingControl.setErrors(null);
//     }
//   };
// }
/** A hero's name can't match the hero's alter ego */
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
export const passConfValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const pass = control.get('password');
  const confPass = control.get('confirmPass');

  return pass && confPass && pass.value !== confPass.value
    ? { matchError: true }
    : null;
};
