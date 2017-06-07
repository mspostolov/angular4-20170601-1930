import { Component, OnInit, Input } from '@angular/core';

import { User } from '../models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  protected _active = false;

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  get active() {
    return this._active;
  }

  toggleActive() {
    this._active = !this._active;
  }

}
