import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { DateFormatterPipe } from './date-formatter.pipe';
import { LetterComponent } from './mail-box/letter/letter.component';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    DateFormatterPipe,
    LetterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
