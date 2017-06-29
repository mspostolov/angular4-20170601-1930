import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailDetailsComponent } from './mail-list/mail-details/mail-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';


import {UserEmailValidator} from './user-list/user-edit/user-email-validator';
import { UserService } from './user-list/user.service';

const appRoutes: Routes = [
  { path: 'mails', component: MailListComponent },
  { path: 'mails/:id', component: MailDetailsComponent,canActivate: [AuthGuardService] },
  { path: 'users', component: UserListComponent   },
  { path: 'users/:id', component: UserDetailsComponent},
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'login', component: LoginComponent },
 
 
  { path: '',
    redirectTo: '/mails',
    pathMatch: 'full'
  }
 
];


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    MailListComponent,
    MailDetailsComponent,
    LoginComponent,
    UserEditComponent,
    UserEmailValidator
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule
  ],
  providers: [AuthGuardService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
