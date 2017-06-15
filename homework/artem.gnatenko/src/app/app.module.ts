import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { TimeElapsedPipe } from './pipes/time-elapsed/time-elapsed.pipe';
import { MailComponent } from './mail-box/mail/mail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { CountryfromISOPipe } from './pipes/country-from-iso/countryfrom-iso.pipe';
import { UsersService } from './user-list/users.service';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyConverterService } from './currency-converter/currency-converter.service';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    TimeElapsedPipe,
    MailComponent,
    UserListComponent,
    UserCardComponent,
    CountryfromISOPipe,
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UsersService,
    CurrencyConverterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
