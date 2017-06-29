import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class WikiSearchService {
  private WIKI_URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';
  private users = [];

  constructor(private http: Http) { }

  sendQuery(query: string): Observable<Array<string>>{
    return this.http.get(this.WIKI_URL + query)
        .map(this.extractWikiSearch);
  }

  
  private extractWikiSearch(response) {
    let rawElements = JSON.parse(response._body);
    let elements = [];
    for(var i = 1; i < rawElements.length; i++){
      for(var j = 0; j < rawElements[i].length; j++){
        elements.push(rawElements[i][j]);
      }
    }
    return elements;
  }
}
