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
  amount = 0;
  convertedValue = 0;

  @ViewChild('amountElem') amountElem: ElementRef;
  @ViewChild('convertedElem') convertedElem: ElementRef;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencies()
      .subscribe(currencies => {
        this.currencies = currencies;
        this.currency = +this.currencies[0].sale;
      });

    this.addBindings();
  }

  setConvertedValue() {
    this.convertedValue = +this.currency * +this.amount;
  }

  setAmountValue() {
    this.amount = +this.convertedValue / +this.currency;
  }

  private addBindings() {
    Observable.fromEvent<KeyboardEvent>(this.amountElem.nativeElement, 'input')
      .map(event => (event.target as HTMLInputElement).value)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(() => {
        this.setConvertedValue();
      });

    Observable.fromEvent<KeyboardEvent>(this.convertedElem.nativeElement, 'input')
      .map(event => (event.target as HTMLInputElement).value)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(() => {
        this.setAmountValue();
      });
  }
}
