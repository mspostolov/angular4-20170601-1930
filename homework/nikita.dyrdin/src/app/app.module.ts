import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { UserProfileService } from './login/user-profile.service';

import { AppComponent } from './app.component';
import { routing } from './routing';

import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { LoginComponent } from './login/login.component';

import { UserServiceService } from './user-service.service';
import { CurrencyConverterService} from './currency-converter.service';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CanActivateAuthGuard } from './can-activate.service';
import { MailboxDatePipe } from './mailbox-date.pipe';
import { ItemComponent } from './mail-box/item/item.component';
import { EditComponent } from './user-card/edit/edit.component';
import { CiryllicNameDirective } from './ciryllic-name.directive';
import { SearchComponent } from './search/search.component';
import { WikiSearchService } from './wiki-search.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'mail', component: MailBoxComponent},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserCardComponent}]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    CurrencyConverterComponent,
    MailBoxComponent,
    LoginComponent,
    MailboxDatePipe,
    ItemComponent,
    EditComponent,
    CiryllicNameDirective,
    SearchComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserServiceService, CurrencyConverterService, UserProfileService, WikiSearchService, CanActivateAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
