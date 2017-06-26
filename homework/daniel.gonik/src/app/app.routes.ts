import { Route } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { MailListComponent } from './mail-box/mail-list/mail-list.component';
import { MailViewComponent } from './mail-box/mail-view/mail-view.component';
import { ContactsComponent } from './mail-box/contacts/contacts.component';
import { ContactViewComponent } from './mail-box/contact-view/contact-view.component';
import { WidgetComponent } from './wiki/widget/widget.component';
import { SettingsComponent } from './mail-box/settings/settings.component';

import { EmailsResolver } from './_resolves/emails.resolver';
import { AuthorsResolver } from './_resolves/authors.resolver';
import { ContactsResolver } from './_resolves/contacts.resolver';

const routes: Route[] = [
  { path: '', redirectTo: '/inbox', pathMatch : 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login'
        },
      },
      // {
      //   path: 'register',
      //   component: RegisterComponent
      //   data: {
      //     title: 'Inbox'
      //   },
      // }
    ]
    // canActivate: [AuthGuardService]
  },
  {
    path: 'inbox',
    component: MailListComponent,
    resolve: {
      emails: EmailsResolver,
      authors: AuthorsResolver
    },
    data: {
      title: 'Inbox'
    },
    // canActivate: [AuthGuardService]
  },
  {
    path: 'emails/:emailId',
    component: MailViewComponent,
    data: {
      title: 'Email view'
    }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    resolve: {
      contacts: ContactsResolver
    },
    data: {
      title: 'Contacts'
    }
  },
  {
    path: 'contact/:contactId',
    component: ContactViewComponent,
    data: {
      title: 'Contact view'
    }
  },
  {
    path: 'wiki',
    component: WidgetComponent,
    data: {
      title: 'Wiki'
    }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    }
  }
];

export default routes;
