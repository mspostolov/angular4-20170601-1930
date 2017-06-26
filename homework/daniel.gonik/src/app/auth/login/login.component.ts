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
        data => {
          // this.returnUrl
          this.router.navigate(['/inbox']);
        },
        error => {
          console.error(error);
        });
  }

}
