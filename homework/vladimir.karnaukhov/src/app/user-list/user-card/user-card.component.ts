import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../services/users-service.service';
import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { User } from '../../data/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() public user: User;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.usersService.getUser(+params["id"]))
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.usersService.update(this.user)
      .then(() => this.goBack());
  }
}
