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
import { TimeAgoPipe } from './time-ago.pipe';
import {MailService} from "./mail-box/mail.service";

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdListModule, MdGridListModule, MdMenuModule, MdInputModule,
    MailBoxModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
