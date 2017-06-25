import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { WikiModule } from './wiki/wiki.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdInputModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdTabsModule,
  MdSliderModule,
  MdProgressSpinnerModule,
  MdTooltipModule,
  MdIconModule
} from '@angular/material';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailListComponent } from './mail-box/mail-list/mail-list.component';
import { MailViewComponent } from './mail-box/mail-view/mail-view.component';
import { ContactsComponent } from './mail-box/contacts/contacts.component';
import { ContactViewComponent } from './mail-box/contact-view/contact-view.component';
import { WidgetComponent } from './wiki/widget/widget.component';
import { SettingsComponent } from './mail-box/settings/settings.component';

import { RelativeDatePipe } from './_pipes/relative-date.pipe';

import { MailBoxService } from './mail-box/mail-box.service';
import { ContactsService } from './_services/contacts.service';
import { SweetAlertService } from 'ng2-sweetalert2';

import { AutofocusDirective } from './_directives/autofocus.directive';

import { EmailsResolver } from './_resolves/emails.resolver';
import { EmailResolver } from './_resolves/email.resolver';
import { AuthorsResolver } from './_resolves/authors.resolver';
import { ContactsResolver } from './_resolves/contacts.resolver';

import routes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    MailListComponent,
    MailViewComponent,
    ContactsComponent,
    ContactViewComponent,
    WidgetComponent,
    RelativeDatePipe,
    AutofocusDirective,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdTabsModule,
    MdSliderModule,
    MdProgressSpinnerModule,
    MdTooltipModule,
    MdIconModule,
    WikiModule
  ],
  providers: [
    SweetAlertService,
    MailBoxService,
    ContactsService,
    EmailsResolver,
    EmailResolver,
    AuthorsResolver,
    ContactsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
