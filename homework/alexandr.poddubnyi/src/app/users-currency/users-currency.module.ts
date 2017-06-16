import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCurrencyComponent } from './users-currency.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersCurrencyComponent, UserListComponent, UserCardComponent],
  providers: [UserService]
})
export class UsersCurrencyModule {
}
