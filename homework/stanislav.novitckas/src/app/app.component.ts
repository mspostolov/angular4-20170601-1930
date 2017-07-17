import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceService} from "./user-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  public loginPage: boolean = false;
  title = 'app';
  constructor(public router: Router, public userService: UserServiceService){}
  ngOnInit() {
    this.userService.getUserList()
      .subscribe();
  }

  ngDoCheck() {
    this.loginPage = this.router.url === '/login';
  }
}
