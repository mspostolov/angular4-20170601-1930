import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserServiceService]
})
export class UserListComponent implements OnInit {
  users;

  constructor(private _userService: UserServiceService) {
    this._userService.getAll().then((response) => {
      this.users = response.json();
    });
  }

  ngOnInit() {
  }

}
