import { Injectable } from '@angular/core';
import { ICurrency } from 'app/users-currency/shared/currency';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/reduce';

@Injectable()
export class CurrencyService {
  apiUrl = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

  constructor(private http: Http) {}

  getCurrencies(): Observable<ICurrency[]> {
    return this.http.get(this.apiUrl)
      .map(res => {
        const resData: ICurrency[] = res.json();
        // const data = {};
        //
        // for (const currency of resData) {
        //   data[currency.ccy] = currency.sale;
        // }

        return resData;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(new Error());
  }
}
