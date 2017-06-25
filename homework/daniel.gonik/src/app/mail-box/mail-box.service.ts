import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MailBoxService {

  private _cache;
  private _emails: Array<any> = [];

  constructor(private http: Http) {
    this._cache = {
      posts: [],
      users: []
    };
  }

  getEmails() {
    return this._cache.posts.length
      ? this._getFromCache('posts')
      : this._fetchData('posts');
  }

  getAuthors() {
    return this._cache.users.length
      ? this._getFromCache('users')
      : this._fetchData('users');
  }

  getEmailById(id) {
    return this._cache.posts.length
      ? this._getFromCacheById('posts', id)
      : this._fetchDataById('posts', id);
  }

  getAuthorById(id) {
    return this._cache.users.length
      ? this._getFromCacheById('users', id)
      : this._fetchDataById('users', id);
  }

  private _getFromCache(entity) {
    return Observable.create(observer => {
      observer.next(this._cache[entity]);
      observer.complete();
    });
  }

  private _fetchData(entity) {
    return this.http.get(`https://jsonplaceholder.typicode.com/${entity}`)
      .map(response => {
        this._cache[entity] = response.json();
        return Object.assign([], this._cache[entity]);
      });
  }

  private _getFromCacheById(entity, id) {
    return Observable.create(observer => {
      const cached = this._cache[entity].find(item => item.id === id);
      observer.next(cached);
      observer.complete();
    })
  }

  private _fetchDataById(entity, id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/${entity}/${id}`)
      .map(response => {
        const res = response.json();
        return Object.assign({}, res);
      });
  }

  private _updateMailBox() {
    this._emails.push(...(this._cache.splice(0, 3)));
    const mark = setInterval(() => {
      this._cache.length
        ? this._emails.push(this._updateEmailDate(this._cache.pop()))
        : clearInterval(mark);
    }, 3000)
  }

  private _updateEmailDate(email) {
    email.createdAt = Date.now();
    return email;
  }

}
