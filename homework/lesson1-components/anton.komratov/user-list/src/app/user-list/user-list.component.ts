import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  testUsers: [Object];

  constructor() {
    this.testUsers = [
      {
        firstName: 'Pavel',
        surname: 'Smirnov',
        photo: '',
        country: 'ru',
        address: 'pl.Mira, 5',
        sex: 'male',
        born: '1980-12-01',
        email: 'ivan.smirnov@gmail.com',
        avatar: 'https://randomuser.me/api/portraits/med/men/83.jpg'
      },
      {
        firstName: 'Valery',
        surname: 'Ivanov',
        photo: '',
        country: 'ru',
        address: 'Karlsplatz, 2',
        sex: 'male',
        born: '1985-10-20',
        email: 'piotr.kruglov@gmail.com'
      }];
  }

  getUsers(): [Object] {
    return this.testUsers;
  }

  ngOnInit() {
  }

}
