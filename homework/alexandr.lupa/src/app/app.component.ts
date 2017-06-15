import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App';

  users: IUser[];

  constructor(
    private _userService: UserService
  ) {}

  ngOnInit() {
    this._userService.getAll().then(res => {
      if (res) {
        this.users = res;
      }
    });
  }
}
