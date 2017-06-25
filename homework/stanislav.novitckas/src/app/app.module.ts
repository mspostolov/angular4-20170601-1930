import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MailComponent } from './mailbox/mail/mail.component';
import { MyDatePipePipe } from './my-date-pipe.pipe';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import {UserServiceService} from "./user-service.service";
import {Http, HttpModule, JsonpModule} from "@angular/http";
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import {CurrencyExchangeRateService} from "./currency-exchange-rate.service";
import {CurrencyConverterService} from "./currency-converter.service";
import { SearchComponent } from './wiki-search/search/search.component';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';
import { LoginComponent } from './login/login.component';
import {MdButtonModule, MdInputModule} from "@angular/material";
import {Route, RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthGuardServiceService} from "./auth-guard-service.service";
import {AuthServiceService} from "./auth-service.service";
import {FormsModule} from "@angular/forms";

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mail-box', component: MailboxComponent},
  {path: 'user-list', component: UserListComponent, canActivate: [AuthGuardServiceService]},
]

@NgModule({
  declarations: [
    AppComponent,
    MailboxComponent,
    MailComponent,
    MyDatePipePipe,
    UserListComponent,
    UserCardComponent,
    CurrencyConverterComponent,
    SearchComponent,
    WikiSearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    MdInputModule,
    MdButtonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserServiceService,
    CurrencyExchangeRateService,
    CurrencyConverterService,
    AuthGuardServiceService,
    AuthServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
