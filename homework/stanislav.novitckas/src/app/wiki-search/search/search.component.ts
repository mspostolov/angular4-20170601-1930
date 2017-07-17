import {Component, ElementRef, OnInit, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('uniqueInput') inputSearch: ElementRef;
  @Output() onNewValue: EventEmitter<string> = new EventEmitter();
  public inputEventsObservable: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.inputEventsObservable = Observable.fromEvent(this.inputSearch.nativeElement, 'input');
    this.inputEventsObservable.debounceTime(200).subscribe((data) => {
      this.onNewValue.emit(data.target.value);
    })

  }

}
