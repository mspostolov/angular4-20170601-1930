import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
 

})
export class UserEditComponent implements OnInit {

 user:User;

 userForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private userService : UserService,
  private router: Router,
  private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
    this.user = this.userService.getUser(+params["id"]);
    this.buildForm() ;
});


}


buildForm() {
  this.userForm = this.formBuilder.group({
    'email': [this.user.email, [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ],
        this.emailUniq.bind(this)
    ],
    
    'name':    [this.user.name, Validators.required]
  });
}
 


private emailUniq(control: AbstractControl) {
   
  return  this.userService.validateEmail(control.value)
  .map(val => { return  val ?  null : { email: {}} });  
 }


  onSubmit()
  {
    if (!this.userForm.valid)
    return;

  this.user.name = this.userForm.get("name").value;
  this.user.email = this.userForm.get("email").value;

  this.router.navigate(['/users']);
  }

}
