import { Route } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MailsListComponent } from './mails-list/mails-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthGuard } from './auth.guard';
import { MailComponent } from './mail/mail.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Route[] = [
  { path: '', redirectTo: '/mails', pathMatch: 'full' },
  {
    path: 'login',
    data: {title: 'Login'},
    component: LoginComponent,
  }, {
    path: 'users',
    data: {title: 'Users'},
    canActivate: [AuthGuard],
    component: UsersListComponent
  }, {
    path: 'users/:id',
    data: {title: 'Show user'},
    canActivate: [AuthGuard],
    component: UserComponent,
    children: [{
      path: 'edit',
      data: { title: 'Edit user' },
      component: UserFormComponent
    }]
  }, {
    path: 'mails',
    data: {title: 'Mails'},
    canActivate: [AuthGuard],
    component: MailsListComponent,
    children: [{
      path: ':id',
      data: {title: 'Mails'},
      component: MailComponent
    }]
  }
];

export { routes };