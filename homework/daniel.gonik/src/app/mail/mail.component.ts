import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'dg-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  private _cache: Array<any> = [];
  public emails: Array<any> = [];

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json())
      .subscribe(res => {
        this._cache = res;
        this._updateMailBox();
      });
  }

  ngOnInit() {
  }

  private _updateMailBox() {
    const mark = setInterval(() => {
      this._cache.length
        ? this.emails.push(this._cache.pop())
        : clearInterval(mark);
    }, 1000)
  }

}
