import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class WikiSearchService {
  wikiUrl: string = "http://ru.wikipedia.org/w/api.php";

  constructor(public jsonp: Jsonp) { }

  getEntities(term: string): Observable<any> {
    let params = new URLSearchParams();
    params.append('search', term);
    params.append('action', 'opensearch');
    params.append('format', 'json');
    params.append('callback', 'JSONP_CALLBACK');

    const paramsObj = {
      search: term,
      action: 'opensearch',
      format: 'json',
      callback: 'JSONP_CALLBACK'
    };

    console.log(params);
    return this.jsonp
      .get(this.wikiUrl, {
        search: paramsObj
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
