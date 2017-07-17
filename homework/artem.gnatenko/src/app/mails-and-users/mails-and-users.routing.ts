import { Routes, RouterModule } from "@angular/router";
import { MailsAndUsersComponent } from "./mails-and-users.component";
import { MailBoxComponent } from './mail-box/mail-box.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MailPageComponent } from './mail-page/mail-page.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const mailsAndUsersRoutes: Routes = [
    {
        path: '',
        component: MailsAndUsersComponent,
        children: [
            { path: '', component: MailBoxComponent },
            { path: 'users-list', component: UserListComponent },
            { path: 'users-list/:id', component: UserPageComponent },
            { path: 'users-list/edit-user/:id', component: EditUserComponent },
            { path: 'mail-page/:id', component: MailPageComponent }
        ]
    }
]

export const mailsAndUsersRouting = RouterModule.forChild(mailsAndUsersRoutes);