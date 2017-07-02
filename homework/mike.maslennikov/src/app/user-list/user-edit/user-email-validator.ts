import {Component, Directive,   forwardRef, Input, ElementRef, Renderer} from '@angular/core';
import {NG_ASYNC_VALIDATORS,Validator, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Directive({
  selector: '[asyncEmailValidator]',
  providers: [ { provide: NG_ASYNC_VALIDATORS, 
            useExisting: forwardRef(() => UserEmailValidator),
            multi: true
        }, UserService ],

})
export class UserEmailValidator implements Validator {
  constructor(private userService:UserService) {
  }

  validate(c:FormControl) {
    return new Promise(resolve =>
      this.userService.validateEmail(c.value).subscribe(res => {
        if (res == true) {
            resolve(null);
        }
        else {
            resolve({asyncEmailValidator: true});
        }
    }));
  }
}