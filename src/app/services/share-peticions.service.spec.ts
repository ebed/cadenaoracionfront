import { TestBed, inject } from '@angular/core/testing';

import { SharePeticionsService } from './share-peticions.service';

describe('SharePeticionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharePeticionsService]
    });
  });

  it('should be created', inject([SharePeticionsService], (service: SharePeticionsService) => {
    expect(service).toBeTruthy();
  }));
});
