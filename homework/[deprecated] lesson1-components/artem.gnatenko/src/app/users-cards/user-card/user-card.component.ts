import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
interface User {
  id: number,
  fullName: string,
  avatarUrl: string,
  birthdate: string,
  gender: string,
  address: string,
  email: string
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  
  @Input() user: User;

  @Input() isActive: Boolean;

  @Output() onActivate = new EventEmitter<User>();

  constructor() { }

  activate(user: User) {
    this.onActivate.emit(user);
  }

  ngOnInit() {
  }

}
