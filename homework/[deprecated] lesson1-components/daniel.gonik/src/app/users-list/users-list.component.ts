import { Component, OnInit } from '@angular/core';
import niceGuys from '../data/nice-guys';

@Component({
  selector: 'brr-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users = [];

  constructor() {
    this.users = niceGuys;
  }

  ngOnInit() {
  }

}
