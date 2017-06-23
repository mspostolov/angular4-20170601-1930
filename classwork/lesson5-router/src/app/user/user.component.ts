import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/pluck'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.pluck('userId').subscribe(params => console.log(params));

    this.route.queryParams.pluck('x').subscribe(params => console.log(params));

    this.route.data.pluck('title').subscribe(params => console.log(params));
  }

  ngOnInit() {
  }

}
