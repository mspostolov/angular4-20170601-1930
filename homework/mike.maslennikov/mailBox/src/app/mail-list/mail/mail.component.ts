import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { Mail, MailEvent } from '../shared/mail';



@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  @Input() mail: Mail;
  @Output() deleted: EventEmitter<MailEvent> = new EventEmitter();

initDate: Date;

  constructor() { }

  deleteMail(mail)
  {
   
  this.deleted.emit(new MailEvent(mail, this.initDate));
    
  }

  ngOnInit() {

  this.initDate = new Date();
  }

}
