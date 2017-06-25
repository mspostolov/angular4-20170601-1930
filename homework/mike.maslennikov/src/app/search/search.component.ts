import { Component, OnInit, ViewChild ,Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

constructor() { }

@ViewChild('searchInput') searchInput ;

 private onSearchSubscription: Subscription;

 @Output() onSearch = new EventEmitter<string>();


ngOnInit() {
 
this.createSubscription();

}

createSubscription()
{
this.onSearchSubscription = Observable.fromEvent(this.searchInput.nativeElement , 'input')
.debounceTime(600)
.map( (e ) => { return e["target"].value; })
.subscribe((val) => {  this.onSearch.emit(val); });

}

}
