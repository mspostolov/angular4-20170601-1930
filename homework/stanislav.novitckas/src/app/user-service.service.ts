import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserServiceService {
  public userList: [{}] = [{
    photo: ''
  }];
  constructor(public http: Http) { }

  public getUserList(): any {
    return this.http.get('https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg')
      .map((data) => {
      this.userList = data.json();
      return data.json()
    })
  }
  public getUser(id: number) {
    return this.userList[id]
  }
}
