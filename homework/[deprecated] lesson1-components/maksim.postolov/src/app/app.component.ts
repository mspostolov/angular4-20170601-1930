import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Users list';
  users = [
    {
      id: 1,
      name: 'Иванов Иван',
      birthdate: '1976-10-10',
      gender: 'Мужской',
      address: 'ул. Звенигороская, 47б',
      email: 'ivanov@mail.ru'
    },
    {
      id: 2,
      name: 'Иванова Ирина',
      birthdate: '1976-10-10',
      gender: 'Женский',
      address: 'ул. Звенигороская, 47б',
      email: 'ivanov@mail.ru'
    },
    {
      id: 3,
      name: 'Иванов Сергей',
      birthdate: '1976-10-10',
      gender: 'Мужской',
      address: 'ул. Звенигороская, 47б',
      email: 'ivanov@mail.ru'
    }
  ];
}
