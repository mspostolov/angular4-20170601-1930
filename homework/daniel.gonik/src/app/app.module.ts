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
  MdSliderModule,
  MdProgressSpinnerModule,
  MdTooltipModule,
  MdIconModule
} from '@angular/material';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailListComponent } from './mail-box/mail-list/mail-list.component';
import { MailViewComponent } from './mail-box/mail-view/mail-view.component';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { SweetAlertService } from 'ng2-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    MailListComponent,
    MailViewComponent,
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
    MdSliderModule,
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
