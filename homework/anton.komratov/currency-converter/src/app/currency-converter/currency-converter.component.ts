import { Component, OnInit } from '@angular/core';
import {RatesService} from "../rates.service";

@Component({
  selector: 'currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers: [ RatesService ]
})
export class CurrencyConverterComponent implements OnInit {

  private _ratesService: RatesService;
  private currencies: { amount: number, from: string, to: string, rate: number, result: number };

  constructor(ratesService: RatesService) {
    this._ratesService = ratesService;
    this.currencies = { amount: undefined, from: 'EUR', to: 'USD', rate: undefined, result: undefined };
  }

  ngOnInit() {
  }

  public submit(form: any): void {

    this.currencies.from = form.currency_from;
    this.currencies.to = form.currency_to;
    this.currencies.amount = form.amount;
    this._ratesService.getRate(this.currencies);
  }
}
