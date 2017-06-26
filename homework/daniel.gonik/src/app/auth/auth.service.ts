import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor() { }

  login(username, password) {
    console.log(username, password);
    return Observable.create(observer => {
      observer.next({});
      observer.complete();
    });
  }
}
