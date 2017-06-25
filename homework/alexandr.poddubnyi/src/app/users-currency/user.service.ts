import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IUser } from 'app/users-currency/shared/user';

@Injectable()
export class UserService {
  apiUrl = 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg';
  users: IUser[];

  constructor(private http: Http) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get(this.apiUrl)
      .map(res => res.json())
      .map(users => this.users = users)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(new Error());
  }
}
