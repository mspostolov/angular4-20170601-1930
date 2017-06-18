import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
 import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
 
import { Currency } from './currency';
 
@Injectable()
export class CurrencyService {
  private courcesUrl = 'http://api.fixer.io/latest';  //?base=USD 
 
  constructor (private http: Http) {}
 
  public getCources(baseCurrency: string = "USD") :  Promise<Currency> {
    return this.http.get(this.courcesUrl + "?base=" + baseCurrency)
                  .toPromise()
                  .then(response => { return response.json();})
                  .then(data=> { return data.rates;});
                               
  }


  public convertCourse(amount: number, from: string, to:string) : Promise<number>
  {
  return this.getCources(from)
  .then(course=> {return amount * course[to];  });

  }




}
 