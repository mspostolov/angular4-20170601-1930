import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { EmailsService } from './services/emails.service';
import { ReceivingDateFormatPipe } from './pipes/receiving-date-format.pipe';
import { MailItemComponent } from './mail-list/mail-item/mail-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MailListComponent,
    ReceivingDateFormatPipe,
    MailItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
