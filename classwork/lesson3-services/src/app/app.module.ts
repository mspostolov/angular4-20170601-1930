import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { User } from './user'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    User
    // { provide: User, useClass: User},
    // { provide: 'API_URL', useValue: 'http://api.'},
    //{ provide: User, useFactory: Userfactory.createInstance()
    // }, deps: []},
    // { provide: LimitedUser, useExisting: User},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
