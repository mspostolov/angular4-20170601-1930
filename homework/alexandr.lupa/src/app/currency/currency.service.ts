import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ICurency } from './interfaces';

const API_BASE = 'http://www.apilayer.net/api';
const API_KEY  = '79ae233ce4adca9f886c091e8fd64cdd';



@Injectable()
export class CurrencyService {

  constructor(
    private _http: Http
  ) { }

  getAviableCurrency(): Promise<void | ICurency[]> {
    return this._http.get(`${API_BASE}/list`, {
      params: {
        access_key: API_KEY
      }
    })
    .toPromise()
    .then(_res => {
      let res = _res.json();

      if (res.success) {
        return res.currencies;
      } else {
        throw new Error(res.error.info);
      }
    })
    .then(res => {
      return Object.keys(res).map(key => {
        return {
          name: res[key],
          value: key
        };
      });
    })
    .catch(err => {
      console.error(err);
      return err;
    });
  }

  convert(from: string, to: string, amount: string): Promise<string> {
    return this._http.get(`${API_BASE}/convert`, {
      params: {
        access_key: API_KEY,
        from,
        to,
        amount
      }
    })
    .toPromise()
    .then(_res => {
      let res = _res.json();
      if (res.success) {
        return res.result;
      } else {
        throw new Error(res.error.info);
      }
    })
    .catch(err => {
      console.error(err);
      return err;
    });
  }

}
