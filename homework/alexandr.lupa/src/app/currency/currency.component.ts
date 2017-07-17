import { CurrencyService } from './currency.service';
import { Component, OnInit } from '@angular/core';

import { ICurency } from './interfaces';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: [
    CurrencyService
  ]
})
export class CurrencyComponent implements OnInit {

  aviableCurrencyList: ICurency[];
  currencyFrom: ICurency;
  currencyTo: ICurency;
  valueFrom: string;
  valueTo: string;

  constructor(
    private _currency: CurrencyService
  ) {
    this.currencyFrom = null;
    this.currencyTo = null;
  }

  ngOnInit() {
    this._currency.getAviableCurrency().then(res => {
      if (res) {
        this.aviableCurrencyList = res;
      }
    });
  }

  convert(): void {
    if (!this.currencyFrom || !this.currencyTo || !this.valueFrom) {
      console.warn('Please fill form');
      return;
    }
    this._currency
      .convert(this.currencyFrom.value, this.currencyTo.value, this.valueFrom)
      .then(res => {
        if (res) {
          this.valueTo = res;
        }
      });
  }

}
