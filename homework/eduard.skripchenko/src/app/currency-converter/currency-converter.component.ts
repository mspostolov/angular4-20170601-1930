import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from 'app/currency-converter-service/currency-converter.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-currency-converter',
    templateUrl: './currency-converter.component.html',
    styleUrls: ['./currency-converter.component.css'],
    providers: [ CurrencyConverterService ]
})
export class CurrencyConverterComponent implements OnInit {
    usdToAUD: Observable<number>;
    constructor(private currencyConverterService: CurrencyConverterService) {}

    ngOnInit() {
        this.usdToAUD = this.currencyConverterService.convert('AUD', 100);
    }
}
