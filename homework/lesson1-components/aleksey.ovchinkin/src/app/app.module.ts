import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card-list/card/card.component';
import { CardDataComponent } from './card-list/card/card-data/card-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CardDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
