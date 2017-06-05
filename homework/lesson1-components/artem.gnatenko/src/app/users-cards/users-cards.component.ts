import { Component, OnInit } from '@angular/core';

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
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.css']
})
export class UsersCardsComponent implements OnInit {
  public users: User[];
  public activeUser: User;
  constructor() {
    this.users = [
      {
        "id": 1,
        "fullName": "Иванов Иван",
        "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/57.jpg",
        "birthdate": "1976-10-10",
        "gender": "мужской",
        "address": "ул. Звенигороская, 47б",
        "email": "ivanov@mail.ru"
      },
      {
        "id": 2,
        "fullName": "Петров Петр",
        "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/7.jpg",
        "birthdate": "1957-01-14",
        "gender": "мужской",
        "address": "ул.Пушкиская, 13",
        "email": "ivanov@mail.ru"
      },
      {
        "id": 3,
        "fullName": "Натальина Наталья",
        "avatarUrl": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
        "birthdate": "1990-07-03",
        "gender": "женский",
        "address": "ул. Лермонтова, 59",
        "email": "ivanov@mail.ru"
      }
    ]
  }

  setActiveUser(user) {
    this.activeUser = this.activeUser === user ? null : user;
  }

  ngOnInit() {
  }

}
