import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from 'app/users-routing/users/users.component';
import { EmailsComponent } from 'app/users-routing/emails/emails.component';
import { UsersRoutingComponent } from 'app/users-routing/users-routing.component';

const routes: Routes = [
  { path: 'users-routing/users', component: UsersComponent },
  { path: 'users-routing/emails', component: EmailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    UsersRoutingComponent
  ],
  exports: [RouterModule]
})
export class UsersRoutingRoutingModule { }
