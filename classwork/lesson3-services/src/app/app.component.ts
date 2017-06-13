import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from "app/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //userClass: User;
  users: Object[];
  randomNumber: number;

  constructor(private _userService: User) {
    //this.users = this._userService.getAll();

    this._userService.getAll().then((users) => {
       this.users = users;
    })

    this.randomNumber = this._userService.getNumber();
  }

  dosomethingMEthod() {
    //this._userService
  }
}


/*
- components
- directives
- pipes

- services  |  providers


DI:
- provider
- injector
- dependancy (service itself)

*/