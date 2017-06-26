import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
   providers: [UserService]
})
export class UserListComponent implements OnInit {

  
  users: Observable<any>;

 constructor(private userService : UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }


}
