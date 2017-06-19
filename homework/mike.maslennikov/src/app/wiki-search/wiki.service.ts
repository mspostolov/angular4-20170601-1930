import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WikiService {

  constructor(private Jsonp: Jsonp) { }

private searchUrl : string = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=JSONP_CALLBACK&search=";

search(query: string) : Observable<string[]>
{
 return this.Jsonp.request(this.searchUrl + query)
 .map(response => <string[]>response.json()[1]);

}


}
