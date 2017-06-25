import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'dg-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
  providers: [ WikipediaService ]
})
export class WidgetComponent {
  items: Observable<string[]>;

  constructor (private wikipediaService: WikipediaService) { }

  search (term: string) {
    this.items = this.wikipediaService.search(term);
  }
}
