import { Component, OnInit, Input } from '@angular/core';
import {User} from '../shared/user';
import {UsersService} from '../shared/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [UsersService]
})
export class UsersListComponent implements OnInit {
 users: User[];
 
  constructor(private usersService: UsersService) { }


 ngOnInit() {
  this.usersService.getUsers().then(users => this.users = users);

}

}
