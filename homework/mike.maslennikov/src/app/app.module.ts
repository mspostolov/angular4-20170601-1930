import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './users-list/user/user.component';
import { HttpModule } from '@angular/http';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserComponent,
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
