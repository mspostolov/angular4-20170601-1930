import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'dg-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  private _cache: Array<any> = [];
  public emails: Array<any> = [];
  public authorsHashMap: Object = {};
  public users: Array<Object> = [];

  constructor(private http: Http, private contactsService: ContactsService) {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(response => response.json())
      .subscribe(authors => {
        this.authorsHashMap = authors.reduce((map, author) => {
          map[author.id] = author;
          return map;
        }, {});
      });

    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json())
      .subscribe((emails = []) => {
        emails.forEach(email => email.createdAt = Date.now())
        this._cache = emails;
        this._updateMailBox();
      });
  }

  ngOnInit() {
    this.users = this.contactsService.getUsers();
  }

  private _updateMailBox() {
    this.emails.push(...this._cache.splice(0, 3));
    const mark = setInterval(() => {
      this._cache.length
        ? this.emails.push(this._updateEmailDate(this._cache.pop()))
        : clearInterval(mark);
    }, 3000)
  }

  private _updateEmailDate(email) {
    email.createdAt = Date.now();
    return email;
  }

}
