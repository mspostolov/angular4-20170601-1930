import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailtoPipe } from './models/mailto.pipe';
import { FullNamePipe } from './models/full-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    MailtoPipe,
    FullNamePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
