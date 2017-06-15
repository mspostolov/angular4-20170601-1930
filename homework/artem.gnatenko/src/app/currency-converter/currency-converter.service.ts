import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ICurrency } from './currency-converter.component';

@Injectable()
export class CurrencyConverterService {
  private currenciesUrl = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

  constructor(private http: Http) { }

  public getCurrencies(): Observable<ICurrency[]> {
    return this.http.get(this.currenciesUrl)
                    .map((res: Response) => res.json());
  }
}