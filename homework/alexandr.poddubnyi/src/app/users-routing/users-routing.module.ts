import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingRoutingModule } from './users-routing-routing.module';
import { UsersComponent } from './users/users.component';
import { EmailsComponent } from './emails/emails.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingRoutingModule
  ],
  declarations: [UsersComponent, EmailsComponent],
  exports: [UsersRoutingRoutingModule]
})
export class UsersRoutingModule { }
