import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {

  start: number;
  end: number
  @Input()letter: MailBox.Letter;
  @Output() onUserDeleted = new EventEmitter<MailBox.Letter>();

  constructor() { }

  ngOnInit() {
    this.start = Date.now();
  }

  ngOnDestroy(){
    this.end = Date.now();
    console.log('Lifetime is ' + (this.end - this.start) + ' milliseconds');
  }

  deleteLetter(letter: MailBox.Letter){
    this.onUserDeleted.emit(letter);
  }

}
