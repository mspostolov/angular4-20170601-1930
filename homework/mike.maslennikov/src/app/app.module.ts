import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailDetailsComponent } from './mail-list/mail-details/mail-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';

const appRoutes: Routes = [
  { path: 'mails', component: MailListComponent },
  { path: 'mails/:id', component: MailDetailsComponent },
  { path: 'users', component: UserListComponent,  canActivate: [AuthGuardService] },
  { path: 'users/:id', component: UserDetailsComponent,  canActivate: [AuthGuardService] },
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
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
