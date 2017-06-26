import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './user-service.service';
/// <reference path="app.d.ts"" />
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  coworkers: Array<Dayoff.User>;
  selectedUser: Dayoff.User;

  onUserSelected(user: Dayoff.User) {
    this.selectedUser = user;
  }

  constructor(private userService: UserServiceService) {  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        users => this.coworkers = users
      )
  }
}
