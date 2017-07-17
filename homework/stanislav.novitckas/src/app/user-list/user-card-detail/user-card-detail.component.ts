import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, RouterModule} from '@angular/router';
import { Location }                 from '@angular/common';
import {UserServiceService} from "../../user-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-user-card-detail',
  templateUrl: './user-card-detail.component.html',
  styleUrls: ['./user-card-detail.component.css']
})
export class UserCardDetailComponent implements OnInit {
  public user;
  public firstName: FormControl;
  public surname: FormControl;
  public urlParam: number;
  public fullName: FormGroup;

  constructor(
    public router: RouterModule,
    public route: ActivatedRoute,
    public userService: UserServiceService,
    @Inject(MD_DIALOG_DATA) public data: any
  ) {
    this.user = {
      photo: '',
      firstName: '',
      surname: ''
    };
    this.firstName = new FormControl(this.user.firstName);
    this.surname = new FormControl(this.user.surname);
    this.fullName = new FormGroup({
      first: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]),
      last: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(24)])
    })
  }

  ngOnInit() {
    this.user = this.userService.getUser(this.data);
    this.fullName.setValue({first: this.user.firstName, last: this.user.surname})
    this.firstName.setValue(this.user.firstName);
    this.surname.setValue(this.user.surname);
  }
  public onSubmit(){}

}
