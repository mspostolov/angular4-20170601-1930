import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { WikiModule } from './wiki/wiki.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdCoreModule,
  MdInputModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdTabsModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdProgressSpinnerModule,
  MdTooltipModule,
  MdIconModule,
  StyleModule
} from '@angular/material';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailListComponent } from './mail-box/mail-list/mail-list.component';
import { MailViewComponent } from './mail-box/mail-view/mail-view.component';
import { ContactsComponent } from './mail-box/contacts/contacts.component';
import { ContactViewComponent } from './mail-box/contact-view/contact-view.component';
import { WidgetComponent } from './wiki/widget/widget.component';
import { SettingsComponent } from './mail-box/settings/settings.component';
import { UserComponent } from './user/user.component';

import { RelativeDatePipe } from './_pipes/relative-date.pipe';

import { AuthGuard } from './_guards/auth.guard';
import { MailBoxService } from './mail-box/_services/mail-box.service';
import { ContactsService } from './mail-box/_services/contacts.service';
import { AuthService } from './auth/auth.service';
import { SweetAlertService } from 'ng2-sweetalert2';

import { AutofocusDirective } from './_directives/autofocus.directive';

import { EmailsResolver } from './_resolves/emails.resolver';
import { AuthorsResolver } from './_resolves/authors.resolver';
import { ContactsResolver } from './_resolves/contacts.resolver';

import { routes } from './app.routes';
import { ContactEditComponent } from './mail-box/contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    MailBoxComponent,
    MailListComponent,
    MailViewComponent,
    ContactsComponent,
    ContactViewComponent,
    WidgetComponent,
    RelativeDatePipe,
    AutofocusDirective,
    SettingsComponent,
    UserComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    BrowserAnimationsModule,
    MdCoreModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdTabsModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdProgressSpinnerModule,
    MdTooltipModule,
    MdIconModule,
    StyleModule,
    WikiModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    MailBoxService,
    ContactsService,
    SweetAlertService,
    EmailsResolver,
    AuthorsResolver,
    ContactsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
