import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'app/users-currency/currency.service';
import { ICurrency } from 'app/users-currency/shared/currency';

@Component({
  selector: 'currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers: [CurrencyService]
})
export class CurrencyConverterComponent implements OnInit {
  currencies: ICurrency[];
  currency = 0;
  amount = 0;
  convertedValue = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencies()
      .subscribe(currencies => {
        this.currencies = currencies;
        this.currency = +this.currencies[0].sale;
      });
  }

  setConvertedValue() {
    this.convertedValue = +this.currency * +this.amount;
  }

  setAmountValue(event) {
    console.log(this.convertedValue, event.target.value);
    this.amount = +this.convertedValue / +this.currency;
  }

}
