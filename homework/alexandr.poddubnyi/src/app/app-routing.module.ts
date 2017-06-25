import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailboxComponent } from './mailbox/mailbox.component';
import { UsersCurrencyComponent } from 'app/users-currency/users-currency.component';
import { WikiRxSearchComponent } from 'app/wiki-rx-search/wiki-rx-search.component';


const routes: Routes = [
  { path: 'mailbox', component: MailboxComponent },
  { path: 'users-currency', component: UsersCurrencyComponent },
  { path: 'wiki-rx-search', component: WikiRxSearchComponent },

  {
    path: '',
    redirectTo: 'wiki-rx-search',
    pathMatch: 'full'
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
