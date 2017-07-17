import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate():Observable<boolean> {
    return Observable.of(true);
  }

}
