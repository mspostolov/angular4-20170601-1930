import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users = [{
    "id": 1,
    "fullName": "Иванов Иван",
    "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/57.jpg",
    "birthdate": "1976-10-10",
    "gender": "мужской",
    "address": "ул. Звенигороская, 47б",
    "email": "ivanov@mail.ru"
  }, {
    "id": 2,
    "fullName": "Петров Петр",
    "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/7.jpg",
    "birthdate": "1957-01-14",
    "gender": "мужской",
    "address": "ул.Пушкиская, 13",
    "email": "petrov@mail.ru"
  }, {
    "id": 3,
    "fullName": "Натальина Наталья",
    "avatarUrl": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
    "birthdate": "1990-07-03",
    "gender": "женский",
    "address": "ул. Лермонтова, 59",
    "email": "natailina@mail.ru"
  }];

  selectItem(item) {
  	item.isSelected = true;
  }
}
