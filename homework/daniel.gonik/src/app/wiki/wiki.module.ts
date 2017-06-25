import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { WikiSearchService } from './wiki-search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetComponent],
  providers: [
    WikiSearchService
  ],
})
export class WikiModule { }
