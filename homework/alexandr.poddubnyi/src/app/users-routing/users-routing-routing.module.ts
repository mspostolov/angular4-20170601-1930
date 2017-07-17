import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from 'app/users-routing/users/users.component';
import { EmailsComponent } from 'app/users-routing/emails/emails.component';
import { UsersRoutingComponent } from 'app/users-routing/users-routing.component';
import { UserComponent } from 'app/users-routing/users/user/user.component';
import { EmailComponent } from 'app/users-routing/emails/email/email.component';
import { LoginComponent } from 'app/users-routing/login/login.component';
import { AuthGuardService } from 'app/users-routing/shared/auth-guard.service';

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
      { path: 'login', component: LoginComponent },
      { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
      { path: 'users/:index', component: UserComponent, canActivate: [AuthGuardService] },
      { path: 'emails', component: EmailsComponent, canActivate: [AuthGuardService] },
      { path: 'emails/:index', component: EmailComponent, canActivate: [AuthGuardService] },
      // { path: '', redirectTo: 'login', pathMatch: 'full' }
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
