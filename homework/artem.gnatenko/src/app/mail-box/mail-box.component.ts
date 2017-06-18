import { Component, OnInit } from '@angular/core';

export interface IMail {
  author: string,
  authorMail: string,
  subject: string,
  description: string,
  date: string
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
  mailBox: IMail[];

  constructor() {
    this.mailBox = [
      {
        author: "Author 1",
        authorMail: "test1@test.test",
        subject: "Test subject 1",
        description: "Test email description 1",
        date: "Sat Jun 10 2017 18:58:44 GMT+0300"
      },{
        author: "Author 2",
        authorMail: "test2@test.test",
        subject: "Test subject 2",
        description: "Test email description 2",
        date: "Sat Jun 10 2016 18:58:44 GMT+0300"
      },{
        author: "Author 3",
        authorMail: "tes3@test.test",
        subject: "Test subject 3",
        description: "Test email description 3",
        date: "Sat Jun 12 2017 18:58:44 GMT+0300"
      },{
        author: "Author 4",
        authorMail: "test4@test.test",
        subject: "Test subject 4",
        description: "Test email description 4",
        date: "Sat Jun 11 2017 18:58:44 GMT+0300"
      }
    ]
  }

  ngOnInit() {
    this.mailGenerator();
  }

  deleteMail(mail:IMail):void {
    this.mailBox.splice(this.mailBox.indexOf(mail), 1);
  }

  addMail(mail: IMail):void {
    this.mailBox.push(mail);
  }

  private mailGenerator():void {
    let startIndex = 4;
    let that = this;
    setInterval(function() {
      startIndex++;
      that.addMail({
        author: "Author " + startIndex,
        authorMail: "test" + startIndex + "@test.test",
        subject: "Test subject " + startIndex,
        description: "Test email description " + startIndex,
        date: new Date().toString()
      });
    }, 3000);
  }
}
