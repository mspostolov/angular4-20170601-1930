import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {PopupUserDetailComponent} from "../popup-user-detail/popup-user-detail.component";
import {UserCardDetailComponent} from "../user-card-detail/user-card-detail.component";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserServiceService} from "../../user-service.service";

@Component({
  selector: 'app-children-test',
  templateUrl: './children-test.component.html',
  styleUrls: ['./children-test.component.css']
})
export class ChildrenTestComponent implements OnInit {
  public urlParam;
  constructor(
    public dialog: MdDialog,
    public route: ActivatedRoute,
    public userService: UserServiceService
  ) { }
//Здесь закончил!!!
  ngOnInit() {
    this.route.params
      .subscribe((data) => console.log('asdasdas', data))
    // console.log('snapShot', this.snapShot);
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.urlParam = +params.get('id');
        console.log('urlParamChildrenTest', this.urlParam, params)
        this.dialog.open(UserCardDetailComponent, {
          data: this.urlParam
        })
      })

  }

}
