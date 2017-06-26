import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailBoxComponent } from 'app/mail-box/mail-box.component';
import { MailDetailsComponent } from 'app/mail-details/mail-details.component';
import { UsersComponent } from 'app/users/users.component';
import { UserDetailsComponent } from 'app/user-details/user-details.component';
import { LoginComponent } from 'app/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/mailbox', pathMatch: 'full' },
    { path: 'mailbox', component: MailBoxComponent },
    { path: 'mail/:id', component: MailDetailsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user/:id', component: UserDetailsComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule { }
