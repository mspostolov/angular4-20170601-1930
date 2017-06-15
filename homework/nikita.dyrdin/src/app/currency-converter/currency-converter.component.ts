import { Component, OnInit, ElementRef } from '@angular/core';
import {CurrencyConverterService} from '../currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  constructor(private currencyConverterService: CurrencyConverterService) { }
  currencies: Array<Converter.CurrencyDefinition>;
  fromCurrency: number;
  toCurrency: number;
  inputValue: number;

  ngOnInit() {
    this.inputValue = 1;
    this.currencyConverterService.getCurrencyList()
      .subscribe(
        currencies => {
          this.currencies = currencies;
          this.fromCurrency = currencies[0].value;
          this.toCurrency = currencies[1].value;
        }
      )
  }
}
