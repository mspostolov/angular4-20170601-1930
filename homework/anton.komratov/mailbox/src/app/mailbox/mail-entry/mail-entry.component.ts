import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mail-entry',
  templateUrl: './mail-entry.component.html',
  styleUrls: ['./mail-entry.component.css']
})
export class MailEntryComponent implements OnDestroy, OnInit {

  @Output()
  remove = new EventEmitter();

  @Input()
  public mail: { title: string, from_name: string, sent_at: Date, timestamp: Date };

  constructor() { }

  ngOnInit() {
    this.mail.timestamp = new Date();
  }

  ngOnDestroy() {
    const lifeTime: number = ((new Date()).valueOf() - this.mail.timestamp.valueOf()) / 1000;
    console.log('Component life time', lifeTime, 'sec');
  }

  public removeMail(): void {
    this.remove.emit(this.mail);
  }

}
