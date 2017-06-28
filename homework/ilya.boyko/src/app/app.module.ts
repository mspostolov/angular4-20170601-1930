import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { RouterModule, Routes, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WikiSearchService } from './wiki-search.service';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';
import { MailsListComponent } from './mails-list/mails-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthGuardService } from './auth-guard.service';
import { MailService } from './mail.service';
import { UserService } from './user.service';
import { MailComponent } from './mail/mail.component';
import { UserComponent } from './user/user.component';

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
    component: UsersListComponent,
    children: [{
      path: 'users/:id',
      data: {title: 'Users'},
      canActivate: [AuthGuard],
      component: UserComponent
    }]
  }, {
    path: 'mails',
    data: {title: 'Mails'},
    canActivate: [AuthGuard],
    component: MailsListComponent,
    children: [{
      path: 'mails/:id',
      data: {title: 'Mails'},
      canActivate: [AuthGuard],
      component: MailComponent
    }]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WikiSearchComponent,
    MailsListComponent,
    UsersListComponent,
    LoginComponent,
    MailComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MdButtonModule
  ],
  providers: [
    WikiSearchService,
    AuthGuard,
    AuthGuardService,
    MailService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
