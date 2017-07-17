import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { User } from "app/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  randomNumber: number;

  constructor(private _userService: User) {
    this.randomNumber = this._userService.getNumber();
  }

  ngOnInit() {
  }

}
