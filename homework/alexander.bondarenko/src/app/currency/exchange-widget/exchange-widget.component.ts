import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from '../currency-converter.service';

@Component({
  selector: 'app-exchange-widget',
  templateUrl: './exchange-widget.component.html',
  styleUrls: ['./exchange-widget.component.css']
})
export class ExchangeWidgetComponent implements OnInit {

  constructor(private _currencyConverter: CurrencyConverterService) { }

  ngOnInit() {
  }

  convert(base: string, to: string[], amount: number) {

  }
}
