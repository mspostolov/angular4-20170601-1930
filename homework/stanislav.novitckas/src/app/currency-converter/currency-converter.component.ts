import { Component, OnInit } from '@angular/core';
import {CurrencyExchangeRateService} from "../currency-exchange-rate.service";
import {CurrencyConverterService} from "../currency-converter.service";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  public valuteList: [{}] = [{Name: 'Российский рубль', Value: 1, Nominal: 1}];
  public value: number | string = 0;
  public leftSelect: number = 1;
  public rightSelect: number = 1;
  public result: number | string;

  constructor(public currencyExchangeRateService: CurrencyExchangeRateService, public currencyConverterService: CurrencyConverterService) { }
  public leftInputBlur(event) {
    this.value = event;
    this.result = this.currencyConverterService.convert(this.leftSelect, this.rightSelect, this.value)
  }
  public leftSelectChange(event) {
    this.leftSelect = event;
    this.result = this.currencyConverterService.convert(this.leftSelect, this.rightSelect, this.value)
  }
  public rightSelectChange(event) {
    this.rightSelect = event;
    this.result = this.currencyConverterService.convert(this.leftSelect, this.rightSelect, this.value)
  }

  ngOnInit() {
    this.currencyExchangeRateService.getCurrencyExchangeRate()
      .subscribe((data) => {
      this.valuteList = data;
      });
  }

}
