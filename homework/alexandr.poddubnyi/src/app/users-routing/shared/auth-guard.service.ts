import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, Router,
  RouterStateSnapshot
} from '@angular/router';
import { DataService } from 'app/users-routing/shared/data.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.dataService.isLoggedIn) {
      return true;
    } else {
      this.dataService.redirectUrl = state.url;
      this.router.navigate(['users-routing/login']);

      return false;
    }
  }
}
