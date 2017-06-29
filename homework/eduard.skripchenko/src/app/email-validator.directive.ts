import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, FormControl, NG_ASYNC_VALIDATORS } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/first';

import { DataService } from 'app/services/data.service';

function emailValidator(control: FormControl) {
    const regExp = new RegExp(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i);
    const isValid = regExp.test(control.value);

    return isValid ? null : { validEmail: false };
}

function validateUniqueEmailFactory(dataService: DataService, userId: number) {
    return (control: FormControl) => {
        const email = control.value;

        return new Observable(observer => {
            if (dataService.getUserByEmail(email, userId)) {
                observer.next({ validEmail: false });
            } else {
                observer.next(null);
            }

        }).debounceTime(500).distinctUntilChanged().first();
    }
}

@Directive({
    selector: '[appEmailValidator][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useValue: emailValidator,
            multi: true
        },
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => EmailValidatorDirective),
            multi: true
        },
        DataService
    ]
})
export class EmailValidatorDirective {
    validator: Function;
    validate(control: FormControl) {
        return this.validator(control);
    }

    constructor(dataService: DataService) {
        this.validator = validateUniqueEmailFactory(dataService, 1); // How to send parameters?
    }
}
