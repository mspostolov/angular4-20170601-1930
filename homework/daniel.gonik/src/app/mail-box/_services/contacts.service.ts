import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContactsService {

  private _cache = [];
  constructor(private http: Http) {
    if (!this._cache.length) {
      this._fetchData();
    }
  }

  getUsers() {
    return this._cache.length
      ? this._getFromCache()
      : this._fetchData();
  }

  getUserById(id) {
    return this._getFromCacheById(id);
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
        this._cache.forEach((user, index) => user.id = index);
        return Object.assign([], this._cache);
      });
  }

  private _getFromCacheById(id) {
    return Observable.create(observer => {
      if (this._cache.length) {
        const cached = this._cache.find(user => user.id === id);
        observer.next(cached);
        observer.complete();
      } else {
        const user = this._fetchData()
          .subscribe(users => {
            const user = users.find((user: any) => user.id === id);
            observer.next(user);
            observer.complete();
          });
      }
    })
  }

}
