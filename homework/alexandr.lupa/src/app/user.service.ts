/// <reference path="./typings.d.ts" />

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(
    private _http: Http
  ) { }

  getAll() {
    return this._http
      .get('https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg')
      .toPromise()
      .then(res => {
        return res.json() as IUser[];
      })
      .catch(error => {
        console.error(error);
      });
  }

}
