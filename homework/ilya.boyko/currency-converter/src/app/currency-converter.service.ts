import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class CurrencyConverterService {

  constructor(private _http: Http) { }

  all() {
		return this._http
    .get('http://api.fixer.io/latest').toPromise()
    .then(response => response.json())
    .then(function(result) {
      return Object.keys(result.rates);
    });
  }

  convert(value: number, from: string, to: string) {
    return this._http
    .get(`http://api.fixer.io/latest?base=${from}&symbols=${to}`).toPromise()
    .then(response => response.json())
    .then(function(result) {
      return value * result.rates[to];
    });
  }

}
