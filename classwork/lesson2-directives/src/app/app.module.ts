import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LogClickDirective } from './log-click.directive';
import { MyformatPipe } from './myformat.pipe';
import { DelayDirective } from './delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LogClickDirective,
    MyformatPipe,
    DelayDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
