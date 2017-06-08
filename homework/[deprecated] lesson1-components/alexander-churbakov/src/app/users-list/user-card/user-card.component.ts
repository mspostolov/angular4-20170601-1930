import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() user;
  @Output() onClicked = new EventEmitter();

  public onClick (event) {
    this.onClicked.emit();
  }

}
