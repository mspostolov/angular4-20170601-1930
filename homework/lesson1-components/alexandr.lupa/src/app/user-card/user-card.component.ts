import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Input() isActive: boolean;

  @Output() onActivate = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {}

  activate(user: User) {
    this.onActivate.emit(user);
  }

}
