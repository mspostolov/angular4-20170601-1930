import { Injectable } from '@angular/core';
import { User, initialUsers } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor() {

   }


validateEmail(email: string) {
   
    let res = (email == "test@mail.ru") ? false : true;
     
    return Observable.of(res).delay(1000);
     
   
}

getUsers() {
   
    return Observable.of(initialUsers);
 }

getUser(id:Number)
{
 
  return initialUsers.filter(item => item.id == id)[0];

}








}
