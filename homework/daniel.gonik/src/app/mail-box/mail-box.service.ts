import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MailBoxService {

  private _cache: Array<any> = [];
  private _emails: Array<any> = [];

  constructor(private http: Http) {
    if (!this._cache.length) {
      this._fetchData();
    }
  }

  getEmails() {
    // return Observable.create(observer => {
    //   observer.next(this._emails);
    // });
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json());
  }

  getAuthors() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(response => response.json());
  }

  private _fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json())
      .subscribe((emails = []) => {
        emails.forEach(email => email.createdAt = Date.now())
        this._cache = emails;
        this._updateMailBox();
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
