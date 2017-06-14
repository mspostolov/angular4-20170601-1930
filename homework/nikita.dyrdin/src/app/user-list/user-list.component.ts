import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  selectedIndex = -1;
  @Input() coworkers: Array<Dayoff.User>;
  @Output() onUserSelected = new EventEmitter<Dayoff.User>();
  constructor() { }

  ngOnInit() {
  }

  onUserPicked(user: Dayoff.User, index: number) {
    this.selectedIndex = index;
    this.onUserSelected.emit(user);
  }

}
