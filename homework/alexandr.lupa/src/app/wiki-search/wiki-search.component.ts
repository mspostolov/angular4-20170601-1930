import { ISearchItem } from './types';
import { WikiSearchService } from './../wiki-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html'
})
export class WikiSearchComponent implements OnInit {

  results: ISearchItem[];

  constructor(
    private _searchService: WikiSearchService
  ) { }

  ngOnInit() {
    this._searchService.search$.asObservable().subscribe(res => {
      if (res.error) {
        console.log(res.error);
        this.results = [];
        return;
      }

      this.results = res.filter((item, index) => index > 0)
        .reduce((acc, item) => {
          item.forEach((str, index) => {
            if (acc[index]) {
              acc[index].push(str);
            } else {
              acc.push([str]);
            }
          });

          return acc;
        }, [])
        .map(item => {
          return {
            title: item[0],
            description: item[1],
            link: item[2]
          };
        });
    });
  }

}
