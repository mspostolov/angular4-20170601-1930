import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from '../currency-converter.service';

@Component({
  selector: 'app-exchange-widget',
  templateUrl: './exchange-widget.component.html',
  styleUrls: ['./exchange-widget.component.css']
})
export class ExchangeWidgetComponent implements OnInit {
  result;
  constructor(private _currencyConverter: CurrencyConverterService) { }

  ngOnInit() {
  }

  convert(from: string, to: string, amount: number) {
    if (!from || !to || !amount) return;

    this.result = this._currencyConverter.convert(from, to, amount)
  }
}
