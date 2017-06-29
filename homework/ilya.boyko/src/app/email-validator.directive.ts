import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator } from '@angular/forms';
import { Observable } from "rxjs";

@Directive({
  selector: '[appEmailValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: emailValidator,
      multi: true
    }
  ]
})
export class EmailValidatorDirective {

  constructor() { }

}


function emailValidator(control) {
  return new Observable(observer => {
    if( control.value === "mail@mail.com" ) {
      observer.next({asyncInvalid: true});
    } else {
      observer.next(null);
    }
  }).first();
  //?control.value
  //true
  //false
}
