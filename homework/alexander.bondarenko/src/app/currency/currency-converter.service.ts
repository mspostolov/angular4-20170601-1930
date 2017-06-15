import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import * as fx from 'money';
import * as oxr from 'open-exchange-rates';

@Injectable()
export class CurrencyConverterService {


    private _fx = fx;
    private _oxr = oxr;

  constructor() {
    this._oxr.set({app_id: '3438ba35738443dfad9d37a1127375ba'}); // TODO: move to config
  }

  convert(from: string, to: string, amount: number): void {
    this._oxr.latest(function() {
      // Apply exchange rates and base rate to `fx` library object:
      this._fx.rates = oxr.rates;
      this._fx.base = oxr.base;

      // money.js is ready to use:
      return this._fx.convert(amount).from(from).to(to); // ~8.0424
    });
  }

}
