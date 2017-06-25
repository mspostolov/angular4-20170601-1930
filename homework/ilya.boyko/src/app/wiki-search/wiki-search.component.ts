import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { WikiSearchService } from '../wiki-search.service';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit {

  query$$ = new Subject<string>();
  results: Object[];
  error: Error;

  constructor(private _searchService: WikiSearchService) {
    this._searchService.search(this.query$$)
    .subscribe(results => {
      debugger
      console.log(results);
      this.results = results;
    });
  }

  search($event: KeyboardEvent) {
    this.query$$.next(($event.target as HTMLInputElement).value);
  }

  ngOnInit() {
  }

}
