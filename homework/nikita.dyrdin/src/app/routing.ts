import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './user-card/edit/edit.component';
import { SearchComponent } from './search/search.component';

import { CanActivateAuthGuard } from './can-activate.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users', },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  // { path: 'characters', component: CharacterListComponent },
  // { path: 'character/:id', component: CharacterComponent },
  {
    path: 'users',
    canActivate: [CanActivateAuthGuard],
      children: [
        { path: '',  component: UserListComponent },
        { 
          path: ':id', 
          children: [
            { path: '', component: UserCardComponent },
            { path: 'edit',  component: EditComponent }
          ] 
        },
      ]
    },
    {
    path: 'mail',
    component: MailBoxComponent,
    canActivate: [CanActivateAuthGuard]
  },
];

export const routing = RouterModule.forRoot(routes);