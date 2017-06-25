import {Component, Input, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {DialogComponent} from "../../dialog/dialog.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, Input {
  @Input() user;
  constructor(public dialog: MdDialog, public router: Router) { }

  ngOnInit() {
  }

  public openPopUp() {
    this.router.navigate(['/user-list/popup'])
    this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
    })
  }

}
