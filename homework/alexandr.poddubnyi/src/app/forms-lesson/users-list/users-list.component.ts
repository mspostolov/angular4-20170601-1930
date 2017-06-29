import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/users-currency/shared/user';
import { UserService } from 'app/users-currency/user.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .map((users) => {
        users.map((user) => user.email = 'example@gmail.com');
        return users;
      })
      .subscribe(users => this.users = users);
  }

  editUser(user: IUser, index: number) {
    console.log(user, index);
  }

}
