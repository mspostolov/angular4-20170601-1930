import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

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
import { UserFormComponent } from './user-form/user-form.component';
import { routes } from "./app.routes";
import { EmailValidatorDirective } from './email-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WikiSearchComponent,
    MailsListComponent,
    UsersListComponent,
    LoginComponent,
    MailComponent,
    UserComponent,
    UserFormComponent,
    EmailValidatorDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
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
