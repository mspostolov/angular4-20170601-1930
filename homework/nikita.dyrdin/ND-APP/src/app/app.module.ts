import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserServiceService } from './user-service.service';
import { CurrencyConverterService} from './currency-converter.service';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { MailBoxComponent } from './mail-box/mail-box.component';

const appRoutes: Routes = [
  {path: 'mail', component: MailBoxComponent},
  {path: 'user', component: UserListComponent}]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    CurrencyConverterComponent,
    MailBoxComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserServiceService, CurrencyConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
