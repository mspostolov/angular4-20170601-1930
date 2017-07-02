import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  user: Dayoff.User;

  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .pluck('id')
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

}
