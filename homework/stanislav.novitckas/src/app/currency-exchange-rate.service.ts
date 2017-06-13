import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyExchangeRateService {

  constructor(public http: Http) { }
  public getCurrencyExchangeRate() {
    return this.http.get('http://www.cbr-xml-daily.ru/daily_json.js')
      .map((data) => data.json())
  }
}
