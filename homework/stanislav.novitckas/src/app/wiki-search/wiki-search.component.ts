import { Component, OnInit } from '@angular/core';
import {WikiSearchServiceService} from "../wiki-search-service.service";

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css'],
  providers: [WikiSearchServiceService]
})
export class WikiSearchComponent implements OnInit {

  constructor(public wikiSearchServiceService: WikiSearchServiceService) { }
  public requestResult: [''];

  public onNewValue(request) {
    this.wikiSearchServiceService.fetchData(request)
      .subscribe((data) => {
        this.requestResult = data[1];
    })
  }

  ngOnInit() {
  }

}
