import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

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
import { SearchComponent } from './search/search.component';
import { WikiSearchComponent } from './search/wiki-search/wiki-search.component';
import { SearchService } from './search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    TimeElapsedPipe,
    MailComponent,
    UserListComponent,
    UserCardComponent,
    CountryfromISOPipe,
    CurrencyConverterComponent,
    SearchComponent,
    WikiSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    UsersService,
    CurrencyConverterService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
