import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authGuardService: AuthGuardService, private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this._authGuardService.isAutnenticated()) {
        this._router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
  }
}
