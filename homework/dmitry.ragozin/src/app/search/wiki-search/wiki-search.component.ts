import {Component, OnChanges, OnInit} from '@angular/core';
import {WikiSearchService} from '../../wiki-search.service';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit {

  public searchResult;
  constructor(private _wikiSearchService: WikiSearchService) { }

  ngOnInit() {
    this._wikiSearchService.getSearchResult().subscribe(searchResult => this.searchResult = searchResult);
  }
  inputChange(value) {
    this._wikiSearchService.search(value);
  }

}
