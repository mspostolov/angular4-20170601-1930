import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  constructor(private _route: ActivatedRoute, private _users: UserService) {}

  ngOnInit() {
    this._route.params
    .switchMap((params: Params) => this._users.getUser(+params['id']))
    .subscribe(user => this.user = user);
  }

  save(form: NgForm) {
    console.log(form);
  }

}
