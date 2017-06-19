import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

@Injectable()
export class WikiSearchService {

  private _baseUrl = 'https://en.wikipedia.org/w/api.php';
  search$ = new Subject<any>();

  constructor(
    private _jsonp: Jsonp
  ) { }

  search(terms: Observable<string>) {
    return terms
      .debounceTime(400)
      .distinctUntilChanged()
      .filter(term => !!term.trim)
      .switchMap(term => this.searchEntries(term.trim()));
  }

  searchEntries(term) {
    return this._jsonp
      .get(this._baseUrl, {
        params: {
          callback: 'JSONP_CALLBACK',
          action: 'opensearch',
          format: 'json',
          search: term
        }
      })
      .map(res => res.json());
  }

}

