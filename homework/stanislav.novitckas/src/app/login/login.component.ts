import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authServiceService: AuthServiceService) { }
  public tryLogIn(loginPassword: NgForm) {
    this.authServiceService.authorize(loginPassword.value.login, loginPassword.value.password)
  }
  ngOnInit() {
  }

}
