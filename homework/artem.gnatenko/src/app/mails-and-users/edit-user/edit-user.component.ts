import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user-list/users.service';
import { IUser } from '../user-list/user-list.component';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

interface IUserEdit extends IUser{
  email?: string
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: IUserEdit;
  editUserForm: any;
  submitted: boolean;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {
    this.submitted = false;
    activatedRoute.params.pluck('id').subscribe((id: string) => {
      this.user = {
        id: +id,
        firstName:"",
        surname: "",
        country: "",
        photo: "",
        email: ""
      }
      this.usersService.getUsersList().subscribe(
        (users: IUser[]) => {this.user = users[+id - 1]}
      );
    });    
  }

  ngOnInit() {
  }

  saveUser(editUserForm: NgForm): void {
    this.submitted = true;
    if (editUserForm.invalid) {
      alert("form invalid");
    };
  }

}
