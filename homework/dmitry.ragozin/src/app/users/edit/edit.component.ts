import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/pluck';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../users.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user;
  constructor(private route: ActivatedRoute, private userService: UsersService) {
    this.route.params.pluck('userId').subscribe(
      (userId: string) => {
        this.user = userService.getById(parseInt(userId, 10));
      }
    );
  }
  onSubmit(form: NgForm) {
    if (form.form.valid) {
      this.userService.setUser(this.user.id,
        {
          id: this.user.id,
          name: form.form.controls.name.value,
          surname: form.form.controls.surname.value,
          email: form.form.controls.email.value,
        }
        )
    }
  }

  ngOnInit() {
  }

}
