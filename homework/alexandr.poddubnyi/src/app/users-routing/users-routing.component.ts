import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/users-routing/shared/data.service';

@Component({
  selector: 'users-routing',
  templateUrl: './users-routing.component.html'
})
export class UsersRoutingComponent {

  constructor(public dataService: DataService) { }
}
