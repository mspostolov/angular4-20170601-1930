import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(private _router: Router) { }

  login() {
    localStorage.authenticated = true;
    this._router.navigate(['/mails']);
  }

  isAutnenticated() {
    return localStorage.activated;
  }

}
