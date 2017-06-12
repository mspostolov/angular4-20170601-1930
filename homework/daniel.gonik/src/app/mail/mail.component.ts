import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'dg-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  emails: Array<any> = [];

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json())
      .subscribe(res => this.emails = res);
  }

  ngOnInit() {
  }

  private _updateMailBox() {

  }

}
