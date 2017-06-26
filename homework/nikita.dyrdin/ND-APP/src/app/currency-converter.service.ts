import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CurrencyConverterService {
  private currencies = [];
  private links = {
    latest: 'http://api.fixer.io/latest',
    base: 'http://api.fixer.io/latest?base=${base}'
  };

  constructor(private http: Http) { }

  public getCurrencyList(): Observable<Array<Converter.CurrencyDefinition>> {
    return this.http.get(this.links.latest)
      .map(this.extractCurrencies)
  }

  private extractCurrencies(response: any) {
    const body = JSON.parse(response._body);
    const currencies = Array<Converter.CurrencyDefinition>();
    currencies.push({
          name: body.base,
          value: 1
        });
    for (const k in body.rates) {
      if (body.rates.hasOwnProperty(k)) {
        currencies.push({
          name: k,
          value: body.rates[k]
        });
      }
    }
    return currencies;
  }

}
