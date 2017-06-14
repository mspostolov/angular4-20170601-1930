import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailBoxComponent } from './mail-box.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailComponent } from './mail/mail.component';
import {MailService} from "./mail.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MailBoxComponent, MailListComponent, MailComponent],
  exports: [MailBoxComponent]
})
export class MailBoxModule { }
