import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import {Route, RouterModule} from '@angular/router';
import {UsersService} from './users.service';
import { EditComponent } from './users/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmailValidatorDirective } from './email-validator.directive';

const routes: Route[] = [
  {path: '', component: UsersComponent},
  {path: 'users/:userId', component: UserComponent},
  {path: 'edit/:userId', component: EditComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    EditComponent,
    EmailValidatorDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
