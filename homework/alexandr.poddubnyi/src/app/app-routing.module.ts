import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailboxComponent } from './mailbox/mailbox.component';
import { UsersCurrencyComponent } from 'app/users-currency/users-currency.component';


const routes: Routes = [
  { path: 'mailbox', component: MailboxComponent },
  { path: 'users-currency', component: UsersCurrencyComponent },
  {
    path: '',
    redirectTo: 'users-currency',
    pathMatch: 'full'
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
