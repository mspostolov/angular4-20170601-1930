import { Router } from '@angular/router';
import { UsersService } from './services/users-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[];
  public selectedUser: User;

  constructor(
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.usersService
      .getUsers()
      .then(users => this.users = users)
      .catch(this.handleError);
  }

  public delete(user: User): void {
    this.usersService.delete(user.id)
      .then(() => {
        this.users = this.users.filter(users => users !== user)
        if (this.selectedUser === user) this.selectedUser = null;
      });
  }

  public add(firstName: string, lastName: string): void {
    this.usersService.create(firstName, lastName)
      .then(user => this.users.push(user))
      .catch(this.handleError);
  }

  public onSelect(user: User) {
    this.selectedUser = user;
  }

  public gotoDetail(): void {
    this.router.navigate(['/users', this.selectedUser.id.toString()]);
  }

  private handleError(error: any) {
    console.log("Error occur during receive users");
  }
}
