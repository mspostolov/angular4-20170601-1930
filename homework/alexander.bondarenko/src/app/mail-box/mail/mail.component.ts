import {Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {Mail} from "../mail.model";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit, OnDestroy {
  @Input() mail: Mail;
  @Output() mailDeleted = new EventEmitter();
  private initTime: number;
  constructor() { }

  deleteMail(mail) {
    this.mailDeleted.emit(mail);
  }

  ngOnInit() {
    this.initTime = Date.now();
  }

  ngOnDestroy() {
    console.log(`Component lived for ${Date.now() - this.initTime} seconds  `)
  }

}
