import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../user-list.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() userCard: IUser;

  constructor() { }

  ngOnInit() {
  }

  getUserPhoto(user: IUser): string {
    return user.photo || "http://dpkarpaty.com.ua/images/pictures/no_picture.jpg";
  }
}
