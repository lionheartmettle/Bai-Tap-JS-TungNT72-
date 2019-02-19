import { FormControl } from '@angular/forms';

export function agePosible(control: FormControl): { [key: string]: any } | null {
    let boo = false;
    if (control.value < 0 || control.value > 150) {
        boo = true;
    }
    return boo ? {'age': 'Can posible !'} : null;
}
