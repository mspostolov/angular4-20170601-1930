import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class WikiSearchService {

  constructor(private _jsonp: Jsonp) { }

  search(query$$: Observable<string>) {
    return query$$.debounceTime(500)
    .distinctUntilChanged()
    .switchMap((query) => {
      return this._jsonp
      .get(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}`)
      .map(function(response) {
        console.log(response);
        return response.json();
      });
    });
  }

}
