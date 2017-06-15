import { TestBed, inject } from '@angular/core/testing';

import { CurrencyExchangeRateService } from './currency-exchange-rate.service';

describe('CurrencyExchangeRateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyExchangeRateService]
    });
  });

  it('should be created', inject([CurrencyExchangeRateService], (service: CurrencyExchangeRateService) => {
    expect(service).toBeTruthy();
  }));
});
