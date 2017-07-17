import { UserDataResolveService } from './user-data-resolve.service';
import { AuthGuardService } from './auth-guard.service';
import { RouterModule, Routes, Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Route[] = [
  { path: '',  data: {title: 'Home'}, component: HomeComponent },
  { path: 'user/:userId',
    data: {title: 'User'},
    canActivate: [AuthGuardService],
    resolve: {
       user: UserDataResolveService
    },
    component: UserComponent,
    children: [
      {
        path: '', component: UserProfileComponent
      },
      {
        //user/:userId/settings
        path: 'settings', component: UserSettingsComponent
      }
    ]
  },
  { path: 'user/:userId',
    component: UserComponent,
    outlet: 'popup'
  }
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
    UserComponent,
    UserProfileComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService, UserDataResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
