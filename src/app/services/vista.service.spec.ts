import { TestBed, inject } from '@angular/core/testing';

import { VistaService } from './vista.service';

describe('VistaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VistaService]
    });
  });

  it('should be created', inject([VistaService], (service: VistaService) => {
    expect(service).toBeTruthy();
  }));
});
