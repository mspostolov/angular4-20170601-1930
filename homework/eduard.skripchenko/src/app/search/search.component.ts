import { Component, OnInit, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
    @ViewChild('searchInput') inputElement;
    @Output() onSearchChanged = new EventEmitter<string>();

    private subscription: Subscription;

    ngOnInit() {
        this.subscription = Observable
            .fromEvent(this.inputElement.nativeElement, 'keyup')
            .debounceTime(500)
            .subscribe((event: KeyboardEvent) => this.onSearchChanged.emit((event.target as HTMLInputElement).value));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
