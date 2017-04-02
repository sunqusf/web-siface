import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-cotizacion',
  templateUrl: './resumen-cotizacion.component.html',
  styleUrls: ['./resumen-cotizacion.component.css']
})
export class ResumenCotizacionComponent implements OnInit {
  cart;
  subtotal:number;

  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.subtotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.subtotal = this.subtotal + this.cart[i].cantidad*this.cart[i].producto.unitPrice;
    }
  }

}
