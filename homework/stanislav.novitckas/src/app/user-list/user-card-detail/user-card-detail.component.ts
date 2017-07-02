import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {UserServiceService} from "../../user-service.service";

@Component({
  selector: 'app-user-card-detail',
  templateUrl: './user-card-detail.component.html',
  styleUrls: ['./user-card-detail.component.css']
})
export class UserCardDetailComponent implements OnInit {
  public user: {} = {
    photo: ''
  };

  constructor(public route: ActivatedRoute, public userService: UserServiceService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
      this.user = this.userService.getUser(+params.get('id')) || {photo: ''};
      console.log('detaildetail', this.user)
      })
  }

}
