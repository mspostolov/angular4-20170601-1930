import { Route } from '@angular/router';

import { MailListComponent } from './mail-box/mail-list/mail-list.component';
import { MailViewComponent } from './mail-box/mail-view/mail-view.component';
import { ContactsComponent } from './mail-box/contacts/contacts.component';
import { ContactViewComponent } from './mail-box/contact-view/contact-view.component';
import { WidgetComponent } from './wiki/widget/widget.component';
import { SettingsComponent } from './mail-box/settings/settings.component';

import { EmailsResolver } from './_resolves/emails.resolver';
import { EmailResolver } from './_resolves/email.resolver';
import { AuthorsResolver } from './_resolves/authors.resolver';
import { ContactsResolver } from './_resolves/contacts.resolver';

const routes: Route[] = [
  { path: '', redirectTo: '/inbox', pathMatch : 'full' },
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
    resolve: {
      email: EmailResolver
    },
    data: {
      title: 'Inbox'
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
      title: 'Contacts'
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
