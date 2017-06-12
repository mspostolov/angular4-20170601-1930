import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailComponent } from './mail-list/mail/mail.component';
import { DateDiffPipe } from './mail-list/shared/datediff.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailListComponent,
    MailComponent,
    DateDiffPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
