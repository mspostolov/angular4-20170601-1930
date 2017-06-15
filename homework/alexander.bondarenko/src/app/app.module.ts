import { UsersModule } from './users/users.module';
import { UserService } from './users/user.service';
import { CurrencyModule } from './currency/currency.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import {MailBoxModule} from "./mail-box/mail-box.module";
import {
  MdButtonModule,
  MdListModule,
  MdGridListModule,
  MdMenuModule,
  MdInputModule
} from "@angular/material";
import {MailService} from "./mail-box/mail.service";
import {TimeAgoModule} from "./time-ago/time-ago.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdListModule, MdGridListModule, MdMenuModule, MdInputModule,
    MailBoxModule,
    TimeAgoModule,
    UsersModule,
    CurrencyModule
  ],
  exports: [],
  providers: [
    MailService,
    {
      provide: 'LEARN_JS_USERS_API_ENDPOINT',
      useValue: 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg'
    },
    UserService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
