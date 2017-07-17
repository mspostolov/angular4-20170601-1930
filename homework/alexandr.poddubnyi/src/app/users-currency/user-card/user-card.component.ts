import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'app/users-currency/shared/user';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
