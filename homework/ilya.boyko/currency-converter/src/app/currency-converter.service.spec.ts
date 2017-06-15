import { TestBed, inject } from '@angular/core/testing';

import { CurrencyConverterService } from './currency-converter.service';

describe('CurrencyConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyConverterService]
    });
  });

  it('should be created', inject([CurrencyConverterService], (service: CurrencyConverterService) => {
    expect(service).toBeTruthy();
  }));
});
