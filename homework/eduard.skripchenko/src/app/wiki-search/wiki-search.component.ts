import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WikiSearchService } from 'app/wiki-search/wiki-search.service';

@Component({
    selector: 'app-wiki-search',
    templateUrl: './wiki-search.component.html',
    styleUrls: ['./wiki-search.component.css'],
    providers: [ WikiSearchService ]
})
export class WikiSearchComponent {
    searchResultLines: Observable<string[]>;

    onSearchChanged(search: string): void {
        this.searchResultLines = this.wikiSearchService.wikiSearch(search);
    }

    constructor(private wikiSearchService: WikiSearchService) {}
}
