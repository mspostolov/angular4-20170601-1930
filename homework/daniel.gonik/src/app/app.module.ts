import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdTabsModule,
  MdProgressSpinnerModule,
  MdTooltipModule,
  MdIconModule
} from '@angular/material';
import { MailComponent } from './mail/mail.component';
import { ListComponent } from './mail/list/list.component';
import { ViewComponent } from './mail/view/view.component';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { SweetAlertService } from 'ng2-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    ListComponent,
    ViewComponent,
    RelativeDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdTooltipModule,
    MdIconModule
  ],
  providers: [
    SweetAlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  static get parameters() {
    return [[SweetAlertService]];
  }
}
