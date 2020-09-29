import { AbstractControl } from '@angular/forms';
export function ValidateRole(control: AbstractControl) {
    if (!control.value.startsWith('admin')  ) {
    return { invalidRole: true }; //return { errorKeyname : true } if invalid
    }
    return null; //return null if ok (no error)
}