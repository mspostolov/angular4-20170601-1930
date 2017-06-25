import { AuthGuardService } from './auth-guard.service';
import { RouterModule, Routes, Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Route[] = [
  { path: '',  data: {title: 'Home'}, component: HomeComponent },
  { path: 'user/:userId',
    data: {title: 'User'},
    canActivate: [AuthGuardService],
    component: UserComponent }
];

/*
- CanActivate/CanDeactivate
- CanActivateChild
- CanLoad
- Resolve
*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
