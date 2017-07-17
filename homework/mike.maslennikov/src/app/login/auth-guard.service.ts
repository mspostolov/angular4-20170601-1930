import { Injectable } from '@angular/core';
import {
  CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot, 
  CanLoad, Route
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   
    return this.authService.isLoggedIn;
  }

}
