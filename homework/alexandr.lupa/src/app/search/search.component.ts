import { WikiSearchService } from './../wiki-search.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchTerm$ = new Subject<string>();

  constructor(
    private searchService: WikiSearchService
  ) { }

  ngOnInit() {
    this.searchService.search(this.searchTerm$).subscribe(res => {
      this.searchService.setNewQuery(res);
    });
  }

}
