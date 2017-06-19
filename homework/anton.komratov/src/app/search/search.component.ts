import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromEvent';
import { WikiSearchServiceService } from '../wiki-search-service.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styles: [''],
  providers: [WikiSearchServiceService]
})
export class SearchComponent implements OnInit {

  private queryProvider$$: Subject<string>;
  private _WikiSearchService: WikiSearchServiceService;
  public result: Observable<string[]>;
  //public items: any[];

  constructor(WikiSearchService: WikiSearchServiceService) {

    this.queryProvider$$ = new Subject<string>();
    this._WikiSearchService = WikiSearchService;

    this.queryProvider$$
      .debounceTime(300)
      .subscribe(res => {
        this.result = this._WikiSearchService.doSearch(res);
        //   .subscribe( resp => {
        //   this.items = resp;
        //   //console.log(resp);
        // });
    });
  }

  ngOnInit() {
  }

  search(queryString: string) {

    this.queryProvider$$.next(queryString);
  }

}
