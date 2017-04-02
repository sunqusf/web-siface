import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CotizacionService } from '../../services/cotizacion.service';
import { Cotizacion } from '../../model/cotizacion.model';

@Component({
  selector: 'app-detalle-cotizacion',
  templateUrl: './detalle-cotizacion.component.html',
  styleUrls: ['./detalle-cotizacion.component.css'],
  providers: [CotizacionService]
})
export class DetalleCotizacionComponent implements OnInit {
  cotizacion:Cotizacion;
  subtotal:number;

  constructor(private cotizacionService: CotizacionService, private route: ActivatedRoute) {
    this.cotizacion = new Cotizacion()
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.cotizacionService.cargar(id).subscribe(data => {
        this.cotizacion = data;
        this.subtotal = 0;
        this.cotizacion.details.forEach(detailItem => {
          this.subtotal = detailItem.quantity*detailItem.unitPrice;
        });
      });
    });
  }

}
