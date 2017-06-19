import { Injectable } from '@angular/core';
import { searchUrls } from './search-urls.constant';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private Jsonp: Jsonp) { }

  public getSearchResults(source: string, text: string): Observable<any> {
    return this.Jsonp.request(searchUrls[source] + text)
                     .map((res: Response) => res.json().results);
  }

}
