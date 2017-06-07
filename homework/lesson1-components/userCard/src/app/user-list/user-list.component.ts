import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  selectedIndex = -1;
  @Input() coworkers: Array<Dayoff.Employee>;
  @Output() onUserSelected = new EventEmitter<Dayoff.Employee>();
  constructor() { }

  ngOnInit() {
  }

  onUserPicked(user: Dayoff.Employee, index: number) {
    this.selectedIndex = index;
    this.onUserSelected.emit(user);
  }

}
