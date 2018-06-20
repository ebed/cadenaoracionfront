import { TestBed, inject } from '@angular/core/testing';

import { SnackbarsServiceService } from './snackbars-service.service';

describe('SnackbarsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackbarsServiceService]
    });
  });

  it('should be created', inject([SnackbarsServiceService], (service: SnackbarsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
