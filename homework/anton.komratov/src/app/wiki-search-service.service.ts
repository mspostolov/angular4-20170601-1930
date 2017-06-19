import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';


@Injectable()
export class WikiSearchServiceService {

  private _http: Http;
  private _jsonp: Jsonp;
  private params;
  private response: Observable<any>;

  constructor(http: Http, jsonp: Jsonp) {
    this._http = http;
    this._jsonp = jsonp;
    this.params = new URLSearchParams();
  }

  public doSearch(searchString: string): Observable<string[]> {
    console.log('doSearch()', searchString);
    // return this._http.get('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchString)
    //   .map(response => <string[]> response.json()[1]);

    this.params.set('search', searchString); // the user's search value
    this.params.set('action', 'opensearch');
    this.params.set('format', 'json');
    this.params.set('callback', 'JSONP_CALLBACK');

    this.response = this._jsonp.get('http://en.wikipedia.org/w/api.php', { search: this.params });
    console.log(this.response);
    return this.response.map(response => {

      //console.log('response', typeof (response.json()));
      return <string[]> response.json()[1];
      });
  }
}
