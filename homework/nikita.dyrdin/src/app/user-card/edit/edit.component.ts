import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
user: Dayoff.User;

  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe(id => {
        this.userService.getUsers().subscribe(users => {
          for(var i = 0; i < users.length; i++){
            if(i == id - 1){
              users[i].id = id;
              this.user = users[i];
              i = users.length;
            }
          }
        })
      })
  }

  firstnameChange(event: any){
    this.user.firstName = event.target.value;
  }
  surnameChange(event: any){
    this.user.surname = event.target.value;
  }
  country(event: any){
    this.user.country = event.target.value;
  }

  updateUser(){
    var updateResult = this.userService.updateUser(this.user);
    if(updateResult == true){
      this.route.params
        .map(params => params['id'])
        .subscribe(id => {
          this.router.navigateByUrl('/users/' + id)
        })
    }
  }


}
