import { User } from '../user.model';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
   this._userService.getAll().then(data => {
     this.users = data;
     console.log(this.users);
   });
  }

}
