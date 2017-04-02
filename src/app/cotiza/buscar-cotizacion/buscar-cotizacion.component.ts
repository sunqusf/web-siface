import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CotizacionService } from '../../services/cotizacion.service';

@Component({
  selector: 'app-buscar-cotizacion',
  templateUrl: './buscar-cotizacion.component.html',
  styleUrls: ['./buscar-cotizacion.component.css'],
  providers: [CotizacionService]
})
export class BuscarCotizacionComponent implements OnInit {
  query:string;
  cotizaciones:any[];
  results:any;

  constructor(private router:Router, private cotizacionService:CotizacionService) { }

  ngOnInit() {
    this.query = '';
    this.cotizaciones = [];
    this.buscar();
  }

  nuevaCotizacion() {
    localStorage.removeItem('cart');
    this.router.navigate(['/cotiza/new/search']);
  }

  buscar() {
    this.cotizacionService.buscar(this.query).subscribe(data => {
      this.cotizaciones = data.content;
      this.results = data;
    });
  }

}
