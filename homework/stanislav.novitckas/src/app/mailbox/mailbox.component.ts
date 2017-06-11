import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  private receiveTime = 1496707200000;
  private mails: [{}] = [
    {receiveDate: 1496707200000, theme: 'adef', sender: 'asdasfasd'},
    {receiveDate: 1496707200000, theme: 'adef', sender: 'asdasfasd'},
    {receiveDate: 1496707200000, theme: 'adef', sender: 'asdasfasd'},
    {receiveDate: 1496707200000, theme: 'adef', sender: 'asdasfasd'},
  ];

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.mails.push({receiveDate: this.receiveTime - 86400000, theme: 'adef', sender: 'asdasfasd'})
      this.receiveTime = this.receiveTime - 86400000;
    }, 3000)
  }

}
