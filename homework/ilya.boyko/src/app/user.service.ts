import { Injectable } from '@angular/core';
import { User } from './user';

const users: User[] = [{
  id: 0,
  email: '0@mail.com',
  name: 'John0',
  surname: 'Doe0'
}, {
  id: 1,
  email: '1@mail.com',
  name: 'John1',
  surname: 'Doe1'
}, {
  id: 2,
  email: '2@mail.com',
  name: 'John2',
  surname: 'Doe2'
}];

@Injectable()
export class UserService {

  constructor() { }

  all() {
    return users;
  }

  getUser(id: number): Promise<User> {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const user = users.find(function(user) {
          return user.id == id;
        });
        resolve(user);
      }, 1000)
    });
  }

}

