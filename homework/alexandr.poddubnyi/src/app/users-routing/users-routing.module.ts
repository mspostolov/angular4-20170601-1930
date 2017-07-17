import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingRoutingModule } from './users-routing-routing.module';
import { UsersComponent } from './users/users.component';
import { EmailsComponent } from './emails/emails.component';
import { DataService } from './shared/data.service';
import { AuthGuardService } from 'app/users-routing/shared/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    UsersRoutingRoutingModule
  ],
  declarations: [UsersComponent, EmailsComponent],
  exports: [UsersRoutingRoutingModule],
  providers: [DataService, AuthGuardService]
})
export class UsersRoutingModule { }
