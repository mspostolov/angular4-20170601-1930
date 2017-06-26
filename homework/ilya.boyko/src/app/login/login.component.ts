import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthGuardService) { }

  ngOnInit() {
  }

  login() {
    this._authService.login();
  }

}
