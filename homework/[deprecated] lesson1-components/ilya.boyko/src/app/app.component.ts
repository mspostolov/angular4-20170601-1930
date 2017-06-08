import { Component } from '@angular/core';

import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users: User[] = [{
    name: 'Иван',
    surname: 'Иванов',
    email: 'a@g.co',
    address: 'ул. Звенигороская, 47б',
    birthday: new Date(),
    gender: 'male'
  }, {
    name: 'Анна',
    surname: 'Петрова',
    email: 'a2@g.co',
    address: 'ул. Звенигороская, 47а',
    birthday: new Date(),
    gender: 'feemale'
  }];
}
