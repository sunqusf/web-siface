import { Component, OnInit } from '@angular/core';

import { CotizacionService } from '../../services/cotizacion.service';

@Component({
  selector: 'app-detalle-cotizacion',
  templateUrl: './detalle-cotizacion.component.html',
  styleUrls: ['./detalle-cotizacion.component.css'],
  providers: [CotizacionService]
})
export class DetalleCotizacionComponent implements OnInit {
  cotizacion;

  constructor(private cotizacionService: CotizacionService) { }

  ngOnInit() {
    this.cotizacion = this.cotizacionService.buscar(1);
  }

}
