import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'

export interface IUser {
  firstName: string,
  surname: string,
  country: string,
  photo?: string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private UsersService: UsersService;
  users: IUser[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsersList().subscribe(
      (users: IUser[]) => {this.users = users;}
    );
  }

}
