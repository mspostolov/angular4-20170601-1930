import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailboxModule } from 'app/mailbox/mailbox.module';
import { Routing } from 'app/app-routing.module';
import { UsersCurrencyModule } from 'app/users-currency/users-currency.module';
import { WikiRxSearchModule } from 'app/wiki-rx-search/wiki-rx-search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    MailboxModule,
    UsersCurrencyModule,
    WikiRxSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
