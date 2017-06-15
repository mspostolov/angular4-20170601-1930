import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../shared/currency.service';
import {Currency} from '../shared/currency';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers: [CurrencyService]
})
export class CurrencyConverterComponent implements OnInit {

  constructor(private currencyService: CurrencyService) { }

 course : Currency;
 conversionResult: number;
 currencies = ["RUB", "USD", "EUR"];

  ngOnInit() {

  }


  convertCurrency(amount, from, to)
  {

  if (!Number(amount) || from == to)
  {
    alert("Uh oh...");
    return;
  }

  this.currencyService.convertCourse(amount,from,to).then(result => { this.conversionResult = result});

  }

}
