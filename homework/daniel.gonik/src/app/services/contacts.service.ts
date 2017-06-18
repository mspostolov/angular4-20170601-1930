import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactsService {

  constructor(private http: Http) {}

  getUsers() {
    return this.http.get('https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg')
      .map(response => response.json());
  }

}
