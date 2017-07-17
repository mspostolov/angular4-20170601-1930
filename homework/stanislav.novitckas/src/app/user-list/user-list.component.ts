import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: [{}];
  constructor(public userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUserList()
      .subscribe((data) => {
      this.users = data;
      })
  }

}
