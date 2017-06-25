import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class WikiSearchService {
  wikiUrl: string = "http://ru.wikipedia.org/w/api.php";

  constructor(private jsonp: Jsonp) {}

  getEntities(term: string): Observable<any> {
    const params = new URLSearchParams();
    params.set('search', term);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(this.wikiUrl, {
        search: params.toString() // <- work around, without toString() parameters don't exist in URL request :(
      })
      .map(response => {
        let responseData = <string[]>response.json();
        let names = responseData[1];
        let descriptions = responseData[2];
        let links = responseData[3];
        let length = names.length;

        let result: any[] = [];

        for (let i = 0; i < length; i++) {
          result.push({
            name: names[i],
            link: links[i],
            description: descriptions[i]
          });
        }

        return result;
      });
  }

}
