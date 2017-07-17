import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/users-currency/user.service';
import { IUser } from 'app/users-currency/shared/user';

@Component({
  selector: 'users-currency',
  templateUrl: './users-currency.component.html',
  styleUrls: ['./users-currency.component.css']
})
export class UsersCurrencyComponent implements OnInit {
  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

}
