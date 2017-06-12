import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { ElapsedPipe } from './elapsed.pipe';
import { MailRowComponent } from './mail-box/mail-row/mail-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    ElapsedPipe,
    MailRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
