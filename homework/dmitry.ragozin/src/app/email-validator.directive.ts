import { Directive } from '@angular/core';
import {NG_VALIDATORS, AbstractControl} from '@angular/forms';

function emailValidator(control) {
  if (!/[0-9a-z]+@[0-9a-z]+\.[a-z]{2,5}/i.test(control.value)) {
    return {'emailValidator': control.value}
  } else {
    return null;
  };
}

@Directive({
  selector: '[emailValidator][ngModel]',
  providers: [{
      provide: NG_VALIDATORS,
      //useValue: emailValidator,
      useExisting: EmailValidatorDirective,
      multi: true
    }]
})
export class EmailValidatorDirective {

  constructor() { }
  validate(control: AbstractControl): {[key: string]: any} {
    return emailValidator(control);
  }

}
