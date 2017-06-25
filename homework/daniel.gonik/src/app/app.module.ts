import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';
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
import { WidgetComponent } from './wiki/widget/widget.component';

import { RelativeDatePipe } from './pipes/relative-date.pipe';

import { ContactsService } from './services/contacts.service';
import { SweetAlertService } from 'ng2-sweetalert2';

import { AutofocusDirective } from './directives/autofocus.directive';
import { SettingsComponent } from './mail-box/settings/settings.component';

const routes: Route[] = [
  { path: '', redirectTo: '/inbox', pathMatch : 'full' },
  {
    path: 'inbox',
    data: {
      title: 'Inbox'
    },
    component: MailListComponent
  },
  {
    path: 'contacts',
    data: {
      title: 'Contacts'
    },
    // canActivate: [AuthGuardService],
    component: ContactsComponent
  },
  {
    path: 'wiki',
    data: {
      title: 'Wiki'
    },
    component: WidgetComponent
  },
  {
    path: 'settings',
    data: {
      title: 'Settings'
    },
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    MailListComponent,
    MailViewComponent,
    ContactsComponent,
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
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
