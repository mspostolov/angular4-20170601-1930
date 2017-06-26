import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserServiceService {

  private USER_URL = 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg';

  constructor(private http: Http) { }

  getUsers(): Observable<Dayoff.User[]> {
    return this.http.get(this.USER_URL)
      .map(this.extractUsers)
  }

  private extractUsers(response: Response) {
    let body = response.json();
    return body;
  }

}
