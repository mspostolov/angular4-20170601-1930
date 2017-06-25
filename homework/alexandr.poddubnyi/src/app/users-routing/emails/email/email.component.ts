import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/users-routing/shared/data.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'email',
  templateUrl: './email.component.html'
})
export class EmailComponent implements OnInit {
  email: {};

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .pluck('index')
      .subscribe((index: string) => {
        this.email = this.dataService.getEmails(index);
      });
  }
}
