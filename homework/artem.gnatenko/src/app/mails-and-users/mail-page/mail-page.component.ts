import { Component, OnInit } from '@angular/core';
import { IMail } from '../mail-box/mail-box.component';

@Component({
  selector: 'app-mail-page',
  templateUrl: './mail-page.component.html',
  styleUrls: ['./mail-page.component.css']
})
export class MailPageComponent implements OnInit {
  mail: IMail;

  constructor() {
    this.mail = {
      id:1,
      author: "Author 1",
      authorMail: "test1@test.test",
      subject: "Test subject 1",
      description: "Test email description 1",
      date: "Sat Jun 10 2017 18:58:44 GMT+0300"
    }
  }

  ngOnInit() {
  }

  deleteMail() {
    this.mail = null;
  }

}
