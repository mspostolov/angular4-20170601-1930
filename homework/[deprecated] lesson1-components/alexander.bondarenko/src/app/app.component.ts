import { Component } from '@angular/core';
import {User} from "./interfaces/user";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [
    {
      firstName: 'Alex',
      lastName: 'Petrov',
      dob: '29.03.1985',
      address: 'Washington',
      gender: 'male',
      email: 'alex@mail.com'
    },
    {
      firstName: 'Lucy',
      lastName: 'White',
      dob: '08.08.1992',
      address: 'New york',
      gender: 'female',
      email: 'lucy@mail.com'
    },
    {
      firstName: 'Joe',
      lastName: 'Dohle',
      dob: '21.12.1981',
      address: 'Alaska',
      gender: 'male',
      email: 'joe@mail.com'
    },
    {
      firstName: 'Kate',
      lastName: 'Travis',
      dob: '23.07.1995',
      address: 'Singapore',
      gender: 'female',
      email: 'kate@mail.com'
    },
    {
      firstName: 'Howard',
      lastName: 'Roark',
      dob: '21.01.1999',
      address: 'Somewhere',
      gender: 'male',
      email: 'howard@mail.com'
    }
  ]
}
