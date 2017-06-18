import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private _usersService: UserService) {
    this._usersService.all().then((users) => {
       this.users = users;
    });
  }

  ngOnInit() {
  }

}
