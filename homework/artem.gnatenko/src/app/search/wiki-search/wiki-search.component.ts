import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from '../search.component';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs/Rx';

interface IResult {
  title: string;
  text: string;
  url: string;
}

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent extends SearchComponent {
  results: IResult[];
  @ViewChild('searchInput') searchInput;

  constructor(public SearchService: SearchService) {
    super(SearchService);
    this.results = [];
    this.searchUrl = "wikiSearch";
  }

  ngOnInit() {
    super.ngOnInit();
    this.initSearchInputObserve();
  }

  search(text: string) {
    super.search(text);
    if (this.searchResults[1]) {
      this.results = this.searchResults[1].map(function(result, index) {
        return {
          title: result,
          text: this.searchResults[2][index],
          url: this.searchResults[3][index]
        }
      });
    }
  }

  private initSearchInputObserve() {
    Observable.fromEvent(this.searchInput.nativeElement, 'input')
      .debounceTime(500)
      .subscribe((event: KeyboardEvent) => { this.search((event.target as HTMLInputElement).value) });
  }
}
