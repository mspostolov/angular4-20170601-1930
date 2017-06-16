import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'app/users-currency/shared/user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users: IUser;

  constructor() { }

  ngOnInit() {
  }

}
