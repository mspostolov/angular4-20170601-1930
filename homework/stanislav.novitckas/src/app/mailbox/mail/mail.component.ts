import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit, Input {
  @Input() mail;
  private deleted = false;
  private lifeTime = 0;
  constructor() { }
  private deleteThisMail() {
    this.deleted = true;
    alert(`Письмо прожило ${this.lifeTime} секунд`)
  }

  ngOnInit() {
    setInterval(() => {this.lifeTime++}, 1000)
  }
}
