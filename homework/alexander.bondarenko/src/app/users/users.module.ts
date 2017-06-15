import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UserListComponent],
  declarations: [UserListComponent, UserCardComponent]
})
export class UsersModule { }
