import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {PopupUserDetailComponent} from "../popup-user-detail/popup-user-detail.component";
import {UserCardDetailComponent} from "../user-card-detail/user-card-detail.component";
import {ActivatedRoute, ActivatedRouteSnapshot, ParamMap} from "@angular/router";

@Component({
  selector: 'app-children-test',
  templateUrl: './children-test.component.html',
  styleUrls: ['./children-test.component.css']
})
export class ChildrenTestComponent implements OnInit {

  constructor(public dialog: MdDialog, public route: ActivatedRoute, public snapShot: ActivatedRouteSnapshot) { }
//Здесь закончил!!!
  ngOnInit() {
    console.log('snapShot', this.snapShot);
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.urlParam = +params.get('id');
        console.log('urlParam', this.urlParam, params)
        return this.userService.getUserList()
      })
    this.dialog.open(UserCardDetailComponent, {
    })
  }

}
