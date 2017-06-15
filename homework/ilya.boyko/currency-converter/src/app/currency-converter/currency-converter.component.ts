import { Component, OnInit } from '@angular/core';

import { CurrencyConverterService } from '../currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  currencies: string[];
  from: string;
  to: string;
  source: number;
  result: number;

  constructor(protected _converterService: CurrencyConverterService) {
    this._converterService.all()
    .then((currencies) => {
       this.currencies = currencies;
    });
  }

  ngOnInit() {
  }

  convert() {
    this._converterService.convert(this.source, this.from, this.to)
    .then((result) => {
      this.result = result;
    });
  }

  isActive() {
    return typeof this.result == 'number';
  }

}
