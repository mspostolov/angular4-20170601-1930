import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { EmailDatePipe } from './email-date/email-date.pipe';
import { ElapsedTimeDirective } from './elapsed-time/elapsed-time.directive';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

@NgModule({
    declarations: [
        AppComponent,
        MailBoxComponent,
        EmailDatePipe,
        ElapsedTimeDirective,
        UserListComponent,
        UserCardComponent,
        CurrencyConverterComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
