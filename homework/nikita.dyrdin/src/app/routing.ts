import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LoginComponent } from './login/login.component';

import { CanActivateAuthGuard } from './can-activate.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users', },
  { path: 'login', component: LoginComponent },
  // { path: 'characters', component: CharacterListComponent },
  // { path: 'character/:id', component: CharacterComponent },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [CanActivateAuthGuard]
  },
    {
    path: 'users/:id',
    component: UserCardComponent,
    canActivate: [CanActivateAuthGuard]
  },
    {
    path: 'mail',
    component: MailBoxComponent,
    canActivate: [CanActivateAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  UserListComponent,
  UserCardComponent,
  MailBoxComponent,
  LoginComponent
];