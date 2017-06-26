import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor() { }


getUsers() {
   
    return Observable.of(this.initialUsers);
 }

getUser(id:Number)
{
 
  return this.initialUsers.filter(item => item.id == id)[0];

}

  initialUsers: User[] = [
  {
    id: 1,
    name: 'Иван',
   lastName: 'Петров'
  },
   {
    id: 2,
    name: 'Петр',
   lastName: 'Иванов'
  },
   {
    id: 3,
    name: 'Сидор',
   lastName: 'Федоров'
  },
 
];


}
