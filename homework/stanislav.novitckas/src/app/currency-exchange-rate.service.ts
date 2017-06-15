import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyExchangeRateService {

  constructor(public http: Http) { }
  public getCurrencyExchangeRate() {
    return this.http.get('http://www.cbr-xml-daily.ru/daily_json.js')
      .map((data) => {
      let valuteList: [{}] = [{Name: 'Российский рубль', Value: 1, Nominal: 1}];
        for (let key in data.json().Valute) {
          let currentValute = data.json().Valute[key];
          currentValute.Value = +currentValute.Value / currentValute.Nominal;
          valuteList.push(currentValute)
        }
        return valuteList;
    })
  }
}
