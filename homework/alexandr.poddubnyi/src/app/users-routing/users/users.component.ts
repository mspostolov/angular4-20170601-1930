import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/users-routing/shared/data.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }
}
