import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

function nameValidator(control) {
  //?control.value
  //true
  //false
}


@Directive({
  selector: '[nameValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: nameValidator,
      multi: true
    }
  ]
})
export class NameValidatorDirective {

  constructor() { }

}
