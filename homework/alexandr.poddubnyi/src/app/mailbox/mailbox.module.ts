import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailboxComponent } from './mailbox.component';
import { MailComponent } from './mail/mail.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MailboxComponent,
    MailComponent,
    ElapsedTimePipe
  ],
  exports: [
    MailboxComponent
  ]
})
export class MailboxModule { }
