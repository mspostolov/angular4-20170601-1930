import { Component, OnInit } from '@angular/core';
import {CurrencyExchangeRateService} from "../currency-exchange-rate.service";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  public valuteList: [{}] = [{Name: 'Российский рубль', Value: 1}];

  constructor(public currencyExchangeRateService: CurrencyExchangeRateService) { }

  ngOnInit() {
    this.currencyExchangeRateService.getCurrencyExchangeRate()
      .subscribe((data) => {
        for (let key in data.Valute) {
          this.valuteList.push(data.Valute[key])
        }
        console.log('currencyExchangeRateService', data.Valute);
        console.log('valuteList', this.valuteList);
      })
  }

}
