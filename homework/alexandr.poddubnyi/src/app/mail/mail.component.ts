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

  constructor() { }

  ngOnInit() {
    this.lifeStart = new Date();
  }

  ngOnDestroy() {
    console.warn(this.getDateDiffernce(this.lifeStart));
  }

  delete() {
    this.deleteMail.emit(this.mail);
  }

  getDateDiffernce(start: Date, end: Date = new Date): number {
    const timeDiff: number = start.getTime() - end.getTime();
    return new Date(timeDiff).getSeconds();
  }
}
