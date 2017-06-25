import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from 'app/users-routing/users/users.component';
import { EmailsComponent } from 'app/users-routing/emails/emails.component';
import { UsersRoutingComponent } from 'app/users-routing/users-routing.component';
import { UserComponent } from 'app/users-routing/users/user/user.component';
import { EmailComponent } from 'app/users-routing/emails/email/email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-routing',
    pathMatch: 'full'
  },

  {
    path: 'users-routing',
    component: UsersRoutingComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'users/:index', component: UserComponent },
      { path: 'emails', component: EmailsComponent },
      { path: 'emails/:index', component: EmailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    UsersRoutingComponent
  ],
  exports: [RouterModule]
})
export class UsersRoutingRoutingModule {
}
