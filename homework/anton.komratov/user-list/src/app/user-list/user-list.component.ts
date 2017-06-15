import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ UserService ]
})
export class UserListComponent implements OnInit {

  private _users: Object[];
  private _userService: UserService;

  constructor(userService: UserService) {
    this._userService = userService;
    this._users = this._userService.getUsers();
  }

  ngOnInit() {
  }

  public getUsers(): Object[] {
    return this._users;
  }

  public debug(): void {
  }
}
