import { TestBed, inject } from '@angular/core/testing';

import { WikiSearchServiceService } from './wiki-search-service.service';

describe('WikiSearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikiSearchServiceService]
    });
  });

  it('should be created', inject([WikiSearchServiceService], (service: WikiSearchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
