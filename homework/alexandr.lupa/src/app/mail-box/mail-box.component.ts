/// <reference path="./typings.d.ts" />

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mail-box',
  templateUrl: './mail-box.component.html',
  styles: [
    `
      :host >>> .table>tbody>tr>td {
        vertical-align: middle;
      }
      :host >>> .show-on-hover {
        visibility: hidden;
      }
      :host >>> .table tr:hover .show-on-hover {
        visibility: visible;
      }
    `
  ]
  // styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  mails: IMail[] = [{
    from: 'from',
    to: 'to',
    title: 'title',
    body: 'body',
    createdAt: new Date('Sun Jun 11 2017 16:13:54 GMT+0300 (EEST)')
  }];

  constructor() { }

  ngOnInit() {
    let newMail = () => {
      this.mails.push({
        from: 'from',
        to: 'to',
        title: 'title',
        body: 'body',
        createdAt: new Date()
      });
    };

    let delayNewEmail = () => {
      setTimeout(() => {
        for (let i = getRandomInt(1, 3); i > 0; i--) {
          newMail();
        }

        if (this.mails.length < 10) {
          delayNewEmail();
        }
      }, getRandomInt(3, 5) * 1000);
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    delayNewEmail();
  }

  removeMail(mail: IMail): void {
    let mailIndex = this.mails.indexOf(mail);
    if (mailIndex > -1) {
      this.mails.splice(mailIndex, 1);
    }
  }

}
