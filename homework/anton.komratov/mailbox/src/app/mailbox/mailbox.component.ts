import { Component, OnInit } from '@angular/core';
import { MockMails } from 'assets/mock-mails';

@Component({
  selector: 'mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  private mails: Object[] = [];
  private mockMailCounter = 0;
  private mockMailMaxNumber = 20;

  constructor() {
    setInterval(() => { this.generateMockMail(); }, Math.random() * 3 * 1000 + 2000);
  }

  ngOnInit() {
  }

  public getMails(): Object [] {
    return this.mails;
  }

  public setMails(mails: Object[]): void {
    this.mails = mails;
  }

  public removeMail(mail: Object): void {
    this.mails.splice(this.mails.indexOf(mail), 1);
  }

  public generateMockMail(): void {

    if (this.mails.length < this.mockMailMaxNumber) {

      const maxIndex = MockMails.length;
      const index: number = Math.floor(Math.random() * maxIndex);

      this.mockMailCounter ++;

      const newMail = Object.create(MockMails[index]);
      newMail.title = newMail.title + ' [' + this.mockMailCounter + ']';
      this.mails.push(newMail);
    }
  }
}
