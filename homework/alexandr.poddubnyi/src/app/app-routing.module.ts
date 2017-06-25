import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailboxComponent } from './mailbox/mailbox.component';
import { UsersCurrencyComponent } from './users-currency/users-currency.component';
import { WikiRxSearchComponent } from './wiki-rx-search/wiki-rx-search.component';
import { UsersRoutingComponent } from './users-routing/users-routing.component';


const routes: Routes = [
  { path: 'mailbox', component: MailboxComponent },
  { path: 'users-currency', component: UsersCurrencyComponent },
  { path: 'wiki-rx-search', component: WikiRxSearchComponent },
  { path: 'users-routing', component: UsersRoutingComponent },
  {
    path: '',
    redirectTo: 'wiki-rx-search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
