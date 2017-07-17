import { Component, OnInit } from '@angular/core';
import { Subject }           from 'rxjs/Subject';
import { Observable }        from 'rxjs/Observable';
import { WikiSearchService } from '../wiki-search.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items: Observable<Array<string>>;
  stream = new Subject<string>();
  query: String;
   
  constructor(
    private wikiSearchService: WikiSearchService
  ) { }

  textInput(event: any){
    this.stream.next(event.target.value);
  }

  ngOnInit() {
    this.items = this.stream
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((query: string) => this.wikiSearchService.sendQuery(query));
  }

}
