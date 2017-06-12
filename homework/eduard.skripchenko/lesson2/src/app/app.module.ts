import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { EmailDatePipe } from './email-date/email-date.pipe';
import { ElapsedTimeDirective } from './elapsed-time/elapsed-time.directive';

@NgModule({
    declarations: [
        AppComponent,
        MailBoxComponent,
        EmailDatePipe,
        ElapsedTimeDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
