import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private _http: Http;

  constructor(http: Http) {
    this._http = http;
  }

  public getUsers() {

    const users: Object[] = [];

    this._http.get('https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg').toPromise()
      .then( resp => {
        users.push(...resp.json());
      }, resp => console.error('Error in UserService.getUsers()') );

    return users;
  }

}
