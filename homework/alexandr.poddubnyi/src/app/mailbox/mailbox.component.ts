import { Component, OnInit } from '@angular/core';
import { mailsData } from 'app/mailbox/shared/mail.data';
import { Mail } from 'app/mailbox/shared/mail.class';


@Component({
  selector: 'mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  mails: Mail[];

  constructor() {
  }

  ngOnInit() {
    mailsData.length = 5;
    this.mails = mailsData;
  }

  deleteMail(mail: Mail) {
    const index = this.mails.indexOf(mail);

    if (index > -1) {
      this.mails.splice(index, 1);
    }
  };

  addMail() {

  };

}
