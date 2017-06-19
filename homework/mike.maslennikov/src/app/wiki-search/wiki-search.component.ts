import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css'],
   providers: [ WikiService ]
})
export class WikiSearchComponent implements OnInit {

  constructor(private wikiService: WikiService) { }

  ngOnInit() {
  }

  results: Observable<string[]>;
 
doSearch(query: string): void {

         this.results = this.wikiService.search(query);
     }



}
