import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'dg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  public errorMsg;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.user = {};
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user.username, this.user.password)
      .subscribe(
        (data) => this.router.navigate(['/app/inbox']), // this.returnUrl
        (error) => this.errorMsg = error
      );
  }

}
