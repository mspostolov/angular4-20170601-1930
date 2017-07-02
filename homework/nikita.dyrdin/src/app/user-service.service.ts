import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserServiceService {

  private USER_URL = 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg';
  private users = [];
  constructor(private http: Http) { }

  getUsers(): Observable<Dayoff.User[]> {
    if(this.users.length == 0){
      return this.http.get(this.USER_URL)
        .map(this.extractUsers)
        .do(users =>
              this.users = users);

    }
    else{
      return Observable.of(this.users);
    }
  }

  updateUser(user: Dayoff.User){
    var a = this.users;
    for(var i = 0; i < this.users.length; i++){
      if(user.id == this.users[i].id){
        this.users[i] = user;
        return true;
      }
    }
    return false;
  }

  private extractUsers(response: Response) {
    let body = response.json();
    return body;
  }

}
