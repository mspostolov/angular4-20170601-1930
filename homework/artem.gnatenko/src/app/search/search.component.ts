import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: any[];
  searchUrl: string;

  constructor(public SearchService: SearchService) {
    this.searchResults = [];
    this.searchUrl = "";
  }

  ngOnInit() { }

  search(text: string) {
    this.SearchService.getSearchResults(this.searchUrl, text).subscribe((results) => this.searchResults = results);
  }

}
