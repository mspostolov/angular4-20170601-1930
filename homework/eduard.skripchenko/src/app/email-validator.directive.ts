import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

function emailValidator(control: FormControl): boolean {
    const regExp = new RegExp(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i);
    return regExp.test(control.value);
}

@Directive({
    selector: '[appEmailValidator][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useValue: emailValidator,
            multi: true
        }
    ]
})
export class EmailValidatorDirective {

    constructor() { }

}
