import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';

import { WikiSearchService } from './wiki-search.service';

@NgModule({
  imports: [
    CommonModule,
    JsonpModule
  ],
  declarations: [],
  providers: [
    WikiSearchService
  ],
})
export class WikiModule { }
