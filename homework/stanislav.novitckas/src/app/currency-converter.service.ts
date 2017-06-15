import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {CurrencyExchangeRateService} from "./currency-exchange-rate.service";


@Injectable()
export class CurrencyConverterService {
  constructor() {
  }
  public convert(from, to, value): string | number {
    let convertedToRub = +value * +from;
    return convertedToRub / +to;
  }
}
