import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailboxComponent } from './mailbox/mailbox.component';


const routes: Routes = [
  {
    path: 'mailbox',
    component: MailboxComponent,
  }, {
    path: '',
    redirectTo: 'mailbox',
    pathMatch: 'full'
  },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
