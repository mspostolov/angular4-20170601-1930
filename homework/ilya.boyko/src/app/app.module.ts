import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WikiSearchService } from './wiki-search.service';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WikiSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ WikiSearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
