import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthServiceService} from "./auth-service.service";

@Injectable()
export class AuthGuardServiceService implements CanActivate{
  constructor(public authServiceService: AuthServiceService, public router: Router) { }
  canActivate():boolean {
    if (sessionStorage.getItem('loggedIn') === 'true') {return true}
    else {
      return this.authServiceService.loggedIn;
    }
  }
}
