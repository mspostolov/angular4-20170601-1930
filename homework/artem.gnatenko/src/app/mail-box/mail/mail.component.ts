import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { IMail } from '../mail-box.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  @Input() mail: IMail;
  @Output() onDelete: EventEmitter<IMail>;
  initTime: number;

  constructor() { 
    this.onDelete = new EventEmitter();    
  }

  delete(mail: IMail):void {
    this.onDelete.emit(mail);
  }

  ngOnInit() {
    this.initTime = new Date().getTime();    
  }

  ngOnDestroy() {
    console.log(Math.round((new Date().getTime() - this.initTime) / 1000) + "s");
  }
}