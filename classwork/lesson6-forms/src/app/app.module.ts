import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { LoggerDirective } from './logger.directive';
import { NameValidatorDirective } from './name-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    LoggerDirective,
    NameValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//template-driven
//reactive