import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() users;

  public userClicked (user) {
    user.chosen = !user.chosen;
  }

}
