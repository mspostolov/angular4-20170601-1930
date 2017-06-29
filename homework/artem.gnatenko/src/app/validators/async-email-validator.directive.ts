import { Directive, forwardRef } from "@angular/core";
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";

const validateUniqueEmailObservable = ( email : string ) => {
  return new Observable(observer => {
    if( email === "exist@mail.com" ) {
      observer.next({asyncInvalid: true});
      observer.complete();
    } else {
      observer.next(null);
    }
  });
}

@Directive({
  selector: "[asyncEmailValidator][formControlName], [asyncEmailValidator][ngModel]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncEmailValidatorDirective),
      multi: true
    }
  ]
})
export class AsyncEmailValidatorDirective implements Validator {
  constructor() {  }

  validate(c : any ): Promise<{[key : string] : any}>|Observable<{[key : string] : any}> {
    return validateUniqueEmailObservable(c.value);
  }
}