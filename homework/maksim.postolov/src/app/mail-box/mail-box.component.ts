import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent {
  mailList;
  currentId;
  addItem;

  constructor() {
    this.mailList = [
      {
        id: 1,
        date: new Date(2011, 0, 1),
        subject: 'Тема письма 1',
        author: 'author1@gmail.com'
      },
      {
        id: 2,
        date: new Date(2017, 1, 12),
        subject: 'Тема письма 2',
        author: 'author2@gmail.com'
      },
      {
        id: 3,
        date: new Date(2017, 5, 5),
        subject: 'Тема письма 3',
        author: 'author3@gmail.com'
      }
    ];

    this.currentId = 3;

    this.addItem = setInterval(() => {
      this.mailList.push({
        id: this.currentId ++,
        date: new Date(),
        subject: 'Тема письма ' + this.currentId,
        author: 'author' + this.currentId + '@gmail.com'
      });
    }, Math.random() * (5000 - 1000) + 1000);
  }
}
