import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiRxSearchComponent } from './wiki-rx-search.component';
import { WikiSearchService } from './wiki-search.service';
import { JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule, JsonpModule
  ],
  declarations: [WikiRxSearchComponent],
  exports: [WikiRxSearchComponent],
  providers: [WikiSearchService]
})
export class WikiRxSearchModule { }
