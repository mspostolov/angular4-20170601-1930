import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContactsService {

  private _cache = [];
  constructor(private http: Http) {}

  getUsers() {
    return this._cache.length
      ? this._getFromCache()
      : this._fetchData();
  }

  _getFromCache() {
    return Observable.create(observer => {
      observer.next(this._cache);
      observer.complete();
    });
  }

  _fetchData() {
    return this.http.get('https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg')
      .map(response => {
        this._cache = response.json();
        return Object.assign([], this._cache);
      });
  }

}
