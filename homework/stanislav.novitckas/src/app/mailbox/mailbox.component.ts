import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  private receiveTime = 1496707200000;
  private mails: [{}] = [
    {receiveDate: 1496707200000, theme: 'Что на выходных?', sender: 'Попов'},
    {receiveDate: 1496707200000, theme: 'Постановка Булгакова', sender: 'Михаил Ефремов'},
    {receiveDate: 1496707200000, theme: 'Диплом', sender: 'Лиза Прохорова'},
    {receiveDate: 1496707200000, theme: 'Unknown', sender: 'Unknown'},
  ];

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.mails.push({receiveDate: this.receiveTime - 86400000, theme: 'Письмо', sender: 'Бесконечный отправитель'})
      this.receiveTime = this.receiveTime - 86400000;
    }, 3000)
  }

}
