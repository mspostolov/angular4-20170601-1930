import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user-list/users.service';
import { IUser } from '../user-list/user-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: IUser;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.pluck('id').subscribe((id: string) => {
      this.usersService.getUsersList().subscribe(
        (users: IUser[]) => {this.user = users[+id - 1]}
      );
    });
  }

  ngOnInit() {    
  }

}
