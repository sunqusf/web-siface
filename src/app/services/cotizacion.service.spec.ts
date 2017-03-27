import { TestBed, inject } from '@angular/core/testing';

import { CotizacionService } from './cotizacion.service';

describe('CotizacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CotizacionService]
    });
  });

  it('should ...', inject([CotizacionService], (service: CotizacionService) => {
    expect(service).toBeTruthy();
  }));
});
