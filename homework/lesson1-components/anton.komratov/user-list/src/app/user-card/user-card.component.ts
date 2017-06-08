import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input()
  user: Object;
  selected: boolean;

  constructor() {
    this.selected = false;
  }

  ngOnInit() {
  }
  printUser() {
    console.log(this.user);
  }
  toggleSelection() {
    this.selected = !this.selected;
  }
  isSelected() {
    return this.selected;
  }

}
