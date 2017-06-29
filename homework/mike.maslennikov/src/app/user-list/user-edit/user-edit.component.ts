import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],

})
export class UserEditComponent implements OnInit {

 private user:User;

  constructor(private route: ActivatedRoute,
  private userService : UserService,
  private router: Router) { }

  ngOnInit() {
  this.route.params.subscribe(params => {this.user = this.userService.getUser(+params["id"]);});
  }
 

  onSubmit(form: NgForm)
  {
   if (!form.valid)
    return;

  this.user.email = form.controls.email.value;
  this.user.name = form.controls.name.value;

 this.router.navigate(['/users']);
  }

}
