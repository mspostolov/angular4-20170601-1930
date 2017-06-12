import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailEntryComponent } from './mailbox/mail-entry/mail-entry.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { DaysAgoPipe } from './days-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailEntryComponent,
    MailboxComponent,
    DaysAgoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
