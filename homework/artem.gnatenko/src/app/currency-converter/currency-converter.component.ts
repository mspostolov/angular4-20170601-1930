import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from './currency-converter.service';

export interface ICurrency {
  ccy: string,
  base_ccy: string,
  buy: string,
  sale: string
}

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  currencies: ICurrency[];
  allCurrencies: string[];
  currencyFrom: string;
  currencyTo: string;
  amount: number;

  constructor(private currencyConverterService: CurrencyConverterService) {
    this.currencies = [];
    this.allCurrencies = [];
    this.amount = 0;
    this.currencyTo = "";
  }

  ngOnInit() {
    this.currencyConverterService.getCurrencies().subscribe((currencies) => this.setAllCurrencies(currencies));
  }

  private setAllCurrencies(currencies: ICurrency[]): void {
    this.currencies = currencies;
    this.currencyFrom = currencies[0].base_ccy;
    currencies.forEach((currency) => {
      if (this.allCurrencies.indexOf(currency.base_ccy) === -1) {
        this.allCurrencies.push(currency.base_ccy);
      }
      if (this.allCurrencies.indexOf(currency.ccy) === -1) {
        this.allCurrencies.push(currency.ccy);
      }
    })
  }

  getCurrenciesTo(currencyFrom: string) {
    return this.currencies.reduce((newCurrencies: string[], currency) => {
      if (currency.ccy === currencyFrom) {
        newCurrencies.push(currency.base_ccy);
      }
      if (currency.base_ccy === currencyFrom) {
        newCurrencies.push(currency.ccy);
      }
      return newCurrencies;
    }, []);
  }

  getConvertedCurrency(from: string, to: string, amount: string): number {
    let isBase = false;
    let currency = this.currencies.filter((currency) => { 
      if (currency.base_ccy === from && currency.ccy === to) {
        isBase = true;
        return true;
      }
      if (currency.ccy === from && currency.base_ccy === to) {
        return true;
      };
    })[0];
    if (currency) {
      return isBase ? Math.round((+currency.sale * +amount * 10000)) / 10000 : Math.round((+currency.sale * +amount * 10000)) / 10000;
    }
    return 0;
  }
}
