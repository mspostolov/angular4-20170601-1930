import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { UserProfileService } from './login/user-profile.service';

import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './routing';

import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LoginComponent } from './login/login.component';

import { UserServiceService } from './user-service.service';
import { CurrencyConverterService} from './currency-converter.service';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CanActivateAuthGuard } from './can-activate.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'mail', component: MailBoxComponent},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserCardComponent}]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    CurrencyConverterComponent,
    MailBoxComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserServiceService, CurrencyConverterService, UserProfileService, CanActivateAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
