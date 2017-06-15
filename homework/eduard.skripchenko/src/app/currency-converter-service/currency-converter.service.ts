import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyConverterService {
    private getCurrencies(): Observable<any> {
        const url = 'http://apilayer.net/api/live?access_key=7297b6a8bc0aff10acd9635e962e3715&currencies=USD,AUD,CAD,PLN,MXN&format=1';
        return this.http.get(url).map(response => response.json());
    }

    convert(currencyCode: string, amount: number): Observable<number> {
        return this.getCurrencies().map(x => parseFloat(x.quotes[`USD${currencyCode}`]) * amount);
    }

    constructor(private http: Http) {}
}
