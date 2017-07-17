import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user;
  //public userId: number;
  constructor(/*private route: ActivatedRoute*/) {
/*
    this.route.params.pluck('userId').subscribe(
      (userId: string) => {this.userId = parseInt(userId, 10)}
    );
*/
  }

  ngOnInit() {
  }

}
