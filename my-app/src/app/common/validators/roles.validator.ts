import { AbstractControl } from '@angular/forms';
export function ValidateRole(control: AbstractControl) {
    if (control.value.startsWith('admin') ||  control.value.startsWith('user')
    || control.value.startsWith('publisher') ) {
        return null; //return null if ok (no error)
    }
    else{
        return { invalidRole: true }; //return { errorKeyname : true } if invalid
    }
    
}