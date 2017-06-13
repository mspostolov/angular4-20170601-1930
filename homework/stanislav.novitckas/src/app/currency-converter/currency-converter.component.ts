import { Component, OnInit } from '@angular/core';
import {CurrencyExchangeRateService} from "../currency-exchange-rate.service";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  constructor(public currencyExchangeRateService: CurrencyExchangeRateService) { }

  ngOnInit() {
    this.currencyExchangeRateService.getCurrencyExchangeRate()
      .subscribe((data) => {
        console.log('currencyExchangeRateService', data);
      })
  }

}
