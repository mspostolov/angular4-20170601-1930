import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { WikiSearchServiceService } from '../wiki-search-service.service';

@Component({
  selector: 'wiki-search',
  templateUrl: './wiki-search.component.html',
  styles: [''],
  providers: [WikiSearchServiceService]
})
export class WikiSearchComponent extends SearchComponent implements OnInit {

  constructor(WikiSearchService: WikiSearchServiceService) {
    super(WikiSearchService);
  }

  ngOnInit() {
  }

}
