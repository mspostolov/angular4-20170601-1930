import { Component, OnInit, Input } from '@angular/core';
import {User} from "../interfaces/user";


@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;

  isActive: boolean = false;

  constructor() { }

  setActive(val) {
    this.isActive = val;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  ngOnInit() {
  }

}
