import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WikiSearchComponent } from './search/wiki-search/wiki-search.component';
import {WikiSearchService} from './wiki-search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WikiSearchComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [WikiSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
