import {
  Component, EventEmitter, Input, OnInit,
  Output, OnDestroy
} from '@angular/core';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit, OnDestroy {
  lifeStart: Date;

  @Input() mail;
  @Output() deleteMail = new EventEmitter;
  @Output() showMailLifeTime = new EventEmitter;

  constructor() { }

  ngOnInit() {
    this.lifeStart = new Date();
  }

  ngOnDestroy() {
    this.showMailLifeTime.emit(this.lifeStart);
  }

  delete() {
    this.deleteMail.emit(this.mail);
  }
}
