import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): void {
     this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
