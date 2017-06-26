import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'app/users-routing/shared/data.service';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user: {};

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .pluck('index')
      .subscribe((index: string) => {
        this.user = this.dataService.getUsers(index);
      });
  }
}
