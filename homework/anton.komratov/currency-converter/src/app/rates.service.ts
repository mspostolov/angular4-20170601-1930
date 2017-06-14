import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RatesService {
  private _http: Http;

  constructor(http: Http) {
    this._http = http;
  }

  public getRate(curr: { amount: number, from: string, to: string, rate: number, result: number } ): void {

    if (curr.from !== curr.to) {

      curr.rate = undefined;
      curr.result = undefined;

      this._http.get('http://api.fixer.io/latest?base=' + curr.from + '&symbols=' + curr.to).toPromise()
        .then(resp => { curr.rate = resp.json().rates[curr.to];
            curr.result = curr.amount * curr.rate; },
              resp => console.error('Error in RatesService.getRate()'));
    } else {
      curr.rate = 1;
      curr.result = curr.amount;
    }
  }
}
