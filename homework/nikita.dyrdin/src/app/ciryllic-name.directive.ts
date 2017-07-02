import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn, FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

function CiryllicNameValidator() : ValidatorFn {
    return (c: AbstractControl) => {
      
      let isValid = /^[а-яА-ЯЁё]+$/.test(c.value);

      if(isValid) {
          return null;
      } else {
          return {
              ciryllicName: {
                  valid: false
              }
          };
    }
  }
}

@Directive({
  selector: '[ciryllicName][ngModel]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: CiryllicNameDirective, multi: true
  }]
})
export class CiryllicNameDirective implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = CiryllicNameValidator();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }

}
