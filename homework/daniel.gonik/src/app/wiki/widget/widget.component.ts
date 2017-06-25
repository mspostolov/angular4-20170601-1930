import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';

import { WikiSearchService } from '../wiki-search.service';

@Component({
  selector: 'dg-wiki-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  items: Observable<string[]>;

  constructor(private wikiSearchService: WikiSearchService) {}

  search(search: string) {
    this.items = this.wikiSearchService.search(search);
  }
}
