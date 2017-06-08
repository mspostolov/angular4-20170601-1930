import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { UserCardComponent } from './users-cards/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersCardsComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
