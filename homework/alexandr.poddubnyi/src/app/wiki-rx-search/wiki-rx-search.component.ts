import {
  Component, ElementRef, OnInit,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { WikiSearchService } from 'app/wiki-rx-search/wiki-search.service';
import 'rxjs/add/operator/filter';

interface Entity {
  "name": string,
  "link": string,
  "description": string
}

@Component({
  selector: 'wiki-rx-search',
  templateUrl: './wiki-rx-search.component.html',
  styleUrls: ['./wiki-rx-search.component.css']
})
export class WikiRxSearchComponent implements OnInit {
  @ViewChild('search') search: ElementRef;
  entities: Entity[] = [];

  constructor(private wikiSearchService: WikiSearchService) { }

  ngOnInit() {
    Observable.fromEvent<KeyboardEvent>(this.search.nativeElement, 'input')
      .map(event => (event.target as HTMLInputElement).value)
      .debounceTime(400)
      .distinctUntilChanged()
      .filter(term => term.trim().length != 0)
      .subscribe((term: string) => {
        this.wikiSearchService.getEntities(term.trim())
          .subscribe((response) => {
            this.entities = response;
          });
      });
  }
}
