import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class AuthServiceService {
public loggedIn: boolean = false;

  constructor(public router: Router) { }
  public authorize(login: string, password: string): void {
    if ((login === 'login1' || login === 'login2') && password === 'password') {
      this.loggedIn = true;
      this.router.navigate(['/user-list'])
    }
  }
}
