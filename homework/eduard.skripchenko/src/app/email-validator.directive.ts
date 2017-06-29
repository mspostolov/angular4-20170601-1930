import { Directive } from '@angular/core';
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

function emailUniqueValidator(control: FormControl, dataService: DataService) {
    const email = control.value;
    console.log(dataService);

    return new Observable(observer => {
        if (email === 'jh.watson@gmail.co.uk') {
            observer.next({ validEmail: false });
        } else {
            observer.next(null);
        }

    }).debounceTime(500).distinctUntilChanged().first();
}

@Directive({
    selector: '[appEmailValidator][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useValue: emailValidator,
            deps: [ DataService ],
            multi: true
        },
        {
            provide: NG_ASYNC_VALIDATORS,
            useValue: emailUniqueValidator,
            multi: true
        },
        DataService
    ]
})
export class EmailValidatorDirective {

    constructor() { }

}
