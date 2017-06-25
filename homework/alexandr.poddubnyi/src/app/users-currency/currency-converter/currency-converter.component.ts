import {
  Component, ElementRef, OnInit,
  ViewChild
} from '@angular/core';
import { CurrencyService } from 'app/users-currency/currency.service';
import { ICurrency } from 'app/users-currency/shared/currency';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers: [CurrencyService],
})
export class CurrencyConverterComponent implements OnInit {
  currencies: ICurrency[];
  currency = 0;
  amountEl: HTMLInputElement;
  convertedEl: HTMLInputElement;

  @ViewChild('amount') amountRef: ElementRef;
  @ViewChild('converted') convertedRef: ElementRef;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencies()
      .subscribe(currencies => {
        this.currencies = currencies;
        this.currency = +this.currencies[0].sale;
      });

    this.amountEl = this.amountRef.nativeElement;
    this.convertedEl = this.convertedRef.nativeElement;
    this.addBindings();
  }

  setConvertedValue() {
    this.convertedEl.value = (+this.currency * +this.amountEl.value).toString();
  }

  setAmountValue() {
    this.amountEl.value = (+this.convertedEl.value / +this.currency).toString();
  }

  private addBindings() {
    Observable.fromEvent<KeyboardEvent>(this.amountEl, 'input')
      .map(event => (event.target as HTMLInputElement).value)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(() => {
        this.setConvertedValue();
      });

    Observable.fromEvent<KeyboardEvent>(this.convertedEl, 'input')
      .map(event => (event.target as HTMLInputElement).value)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(() => {
        this.setAmountValue();
      });
  }
}
