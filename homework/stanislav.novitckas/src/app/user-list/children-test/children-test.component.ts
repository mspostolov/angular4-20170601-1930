import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
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
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.urlParam = +params.get('id');
        this.dialog.open(UserCardDetailComponent, {
          data: this.urlParam
        })
      })

  }

}
