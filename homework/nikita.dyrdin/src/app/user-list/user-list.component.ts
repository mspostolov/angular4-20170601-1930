import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {
  selectedIndex = -1;
  //@Input() coworkers: Array<Dayoff.User>;
  //@Output() onUserSelected = new EventEmitter<Dayoff.User>();
  coworkers: Array<Dayoff.User>;

  constructor(
    private userService: UserServiceService) {  }


  ngOnInit() {
    this.getUsers();
  }

  onUserPicked(user: Dayoff.User, index: number) {
    this.selectedIndex = index;
   // this.onUserSelected.emit(user);
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => {
        for(var i = 0; i < users.length; i++){
          users[i].id = i + 1;
        }
        this.coworkers = users;
      }
       // users => this.coworkers = users
      )
  }

}
