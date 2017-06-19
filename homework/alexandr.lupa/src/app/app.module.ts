import { WikiSearchService } from './wiki-search.service';
import { NgModule }      from '@angular/core';
import { UserService }   from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { ElapsedPipe } from './elapsed.pipe';
import { MailRowComponent } from './mail-box/mail-row/mail-row.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { CurrencyComponent } from './currency/currency.component';
import { SearchComponent } from './search/search.component';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    ElapsedPipe,
    MailRowComponent,
    UserListComponent,
    UserCardComponent,
    CurrencyComponent,
    SearchComponent,
    WikiSearchComponent
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    WikiSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
