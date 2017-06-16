import { Component, OnInit, OnDestroy } from '@angular/core';

import { Mail } from 'app/mailbox/shared/mail.class';
import {
  additionalMails,
  mailsData
} from 'app/mailbox/shared/mail.data';

@Component({
  selector: 'mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit, OnDestroy {
  mails: Mail[];
  newMailIndex: number;
  mailsInterval: any;

  constructor() {
    this.newMailIndex = 0;
  }

  ngOnInit() {
    this.mails = mailsData;
    this.startMailsLoading(3000);
  }

  ngOnDestroy() {
    clearInterval(this.mailsInterval);
  }

  deleteMail(mail: Mail) {
    const index = this.mails.indexOf(mail);

    if (index > -1) {
      this.mails.splice(index, 1);
    }
  };

  addMail() {
    let newMail = additionalMails[this.newMailIndex++];

    if (newMail) {
      newMail.date = new Date().toString();
    } else {
      newMail = new Mail();
    }

    this.mails.splice(0, 0, newMail);
  };

  showMailLifeTime(lifeStart: Date) {
    console.log(`mail existed on desktop: ${this.getDateDiffernce(lifeStart)} seconds`);
  }

  getDateDiffernce(start: Date, end: Date = new Date): number {
    const timeDiff: number = end.getTime() - start.getTime();
    return timeDiff / 1000;
  }

  private startMailsLoading(interval) {
    this.mailsInterval = setInterval(() => {
      this.addMail();
    }, interval);
  }

}
