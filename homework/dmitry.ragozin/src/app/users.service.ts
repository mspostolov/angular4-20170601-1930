import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  users;
  constructor() {
    this.users = [
      {name: 'Petr', surname: 'Ivanov', email: 'petr@mail.ru', id: 0},
      {name: 'Vladimir', surname: 'Kurnosov', email: 'vladimir@bk.ru',  id: 1},
      {name: 'Oleg', surname: 'Ruchkin', email: 'oleg@list.ru', id: 2},
    ]
  }
  getAll() {
    return this.users;
  }
  getById(id: number) {
    return this.users[id];
  }
  setUser(id, user) { this.users[id] = user;
  }

}
