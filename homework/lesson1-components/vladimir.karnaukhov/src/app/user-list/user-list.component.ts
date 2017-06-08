import { Component, OnInit } from '@angular/core';
import { User, Sex } from './user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor() { }

  ngOnInit() {
    this.users = [
      { id: 1, firstName: 'Иван', lastName: 'Иванов', address: 'Урюпинск', sex: Sex.Male, email: "ivan@ivanov.me" },
      { id: 2, firstName: 'Анна', lastName: 'Каренина', address: 'Москва', sex: Sex.Female, email: "akarenina@moscow.ru" },
      { id: 3, firstName: 'Винни', lastName: 'Пух', address: 'До востребования', sex: Sex.Undefined, email: "cristofer.robin@disney.com" },
      { id: 4, firstName: 'Робин', lastName: 'Гуд', address:'Точно не известно', sex: Sex.Male, email: 'robin.good@sherwood.mil' },
      { id: 5, firstName: 'Брюс', lastName: 'Уэйн', address: 'Готтем сити', sex: Sex.Male, email: "batman@gotham.net" }
    ]
  }

  onUserSelect(selectedUser: User) {
    this.selectedUser = selectedUser;
  }

}
