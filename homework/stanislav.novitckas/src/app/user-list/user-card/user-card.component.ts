import {Component, Input, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {DialogComponent} from "../../dialog/dialog.component";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, Input {
  @Input() user;
  @Input() index;
  constructor(
    public dialog: MdDialog,
    public router: Router,
    public route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: ParamMap) => {
    });
  }

  public openPopUp() {
    this.router.navigate(['/user-list/popup'])
    this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
    })
  }
  public openUserCard(index) {
    this.router.navigate(['/user-list', index])
  }

}
