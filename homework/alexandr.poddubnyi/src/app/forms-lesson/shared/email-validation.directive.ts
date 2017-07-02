import { Directive, forwardRef } from '@angular/core';
import {
  FormControl, NG_ASYNC_VALIDATORS,
  NG_VALIDATORS, Validator
} from '@angular/forms';
import { UserService } from 'app/users-currency/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

function minLengthValidation(control: FormControl) {
  return (control.value && control.value.length >= 3) ? null : { minLengthValidation: true };
}

function isUnique(email: string) {
  console.log(email);
  return new Observable(observer => {
    if (email.search('.com') === -1) {
      observer.next({ asyncInvalid: true });
    } else {
      observer.next(null);
    }
  }).debounceTime(1000).first();
}

@Directive({
  selector: '[emailValidation][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: minLengthValidation,
      multi: true
    }, {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailValidationDirective),
      multi: true
    },
    UserService
  ]
})
export class EmailValidationDirective implements Validator {
  // constructor(userService: UserService) {
  //   this.v = isUnique(userService);
  // }

  constructor() {}

  validate(control: FormControl): Observable<{ [key: string]: any }> | any {
    return isUnique(control.value);
  }

}
