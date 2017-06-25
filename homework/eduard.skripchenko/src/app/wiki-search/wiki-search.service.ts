import { Injectable } from '@angular/core';
import { Jsonp, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WikiSearchService {
    wikiSearch(search: string): Observable<string[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        const wikiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=JSONP_CALLBACK&search=${search}`;
        //this.http.get
        return this.jsonp.get(wikiUrl).map(response => <string[]>response.json()[1]);
    }

    constructor(private jsonp: Jsonp) {}
}
