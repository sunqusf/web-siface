import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-cotizacion',
  templateUrl: './resumen-cotizacion.component.html',
  styleUrls: ['./resumen-cotizacion.component.css']
})
export class ResumenCotizacionComponent implements OnInit {
  cart;

  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

}
