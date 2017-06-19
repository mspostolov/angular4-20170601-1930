import { Injectable } from '@angular/core';
/*
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/switchMap';
*/
import {Observable, Subject} from 'rxjs/Rx';


@Injectable()
export class WikiSearchService {
  private _searchResult$$;
  constructor() {
    this._searchResult$$ = new Subject();
  }
  getSearchResult() {
    return this._searchResult$$;
  }
  search(value) {
    //Observable.fromPromise(fetch('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + value))
    Observable.fromPromise(fetch('https://api.github.com/search/repositories?q=' + value))
      .debounceTime(500)
      .switchMap((r) => {
        return Observable.fromPromise(r.json());
      })
      .subscribe(json => {
        //this._searchResult$$.onNext(json.items)
        this._searchResult$$.next(json.items);
      });
  }

}
