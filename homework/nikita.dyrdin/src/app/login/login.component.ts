import { Component, OnDestroy } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnDestroy {
  private loginSub: Subscription;

  constructor( 
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private userProfileService: UserProfileService) { }


  public get isLoggedIn() : boolean {
    return this.userProfileService.isLoggedIn;
  }

  private toggleLogState(val: boolean) {
    this.userProfileService.isLoggedIn = val;
  }

  login(){
    this.loginSub = this.loginService.login()
      .mergeMap(loginResult => this.route.queryParams)
      .map(qp => qp['redirectTo'])
      .subscribe(redirectTo => {
        console.log(`Successfully logged in`);
        if (this.userProfileService.isLoggedIn) {
          let url = redirectTo ? [redirectTo] : [ '/users' ];
          this.router.navigate(url);
        }
      })

  }


  logout() {
    this.loginService.logout();
    console.log(`Successfully logged out`);
  }
  
  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }

}
