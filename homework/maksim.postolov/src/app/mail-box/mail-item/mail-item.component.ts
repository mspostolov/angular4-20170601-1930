import { Component, OnInit, Input, OnDestroy} from '@angular/core';

@Component({
  selector: '[app-mail-item]',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit, OnDestroy {
  @Input() mailItem;
  @Input() itemIndex;
  @Input() mailList;

  timeCreate;

  constructor() { }

  ngOnInit() {
    this.timeCreate = new Date().getTime();
  }

  ngOnDestroy() {
    let timeLive = (new Date().getTime() - this.timeCreate) / 1000;
    console.log('Время жизни компонента ' + timeLive + ' секунд');
  }

  deleteItem () {
    this.mailList.splice(this.itemIndex, 1);
  }
}
