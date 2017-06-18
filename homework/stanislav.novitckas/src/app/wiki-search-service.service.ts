import { Injectable } from '@angular/core';
import {Jsonp, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WikiSearchServiceService {

  constructor(public jsonp: Jsonp) { }
  public fetchData(request): Observable<any> {
    let params = new URLSearchParams();
    params.set('search', request);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get('https://en.wikipedia.org/w/api.php', {search: params})
      .map((data) => data.json())
  }


}
