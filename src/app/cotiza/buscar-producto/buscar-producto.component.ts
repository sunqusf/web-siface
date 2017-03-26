import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css'],
  providers: [ProductoService]
})
export class BuscarProductoComponent implements OnInit {
  productos;
  productoActual;
  query:string;
  cart;
  cantidadSolicitada;

  constructor(private router: Router, private productoService: ProductoService) {
    this.productos = [];
    this.cart = [];
    this.query = '';
  }

  ngOnInit() {
    this.cantidadSolicitada = 1;
    this.productoActual = null;
    let cart = JSON.parse(localStorage.getItem('cart'));
    this.cart = cart != null ? cart : [];
  }

  onBuscar() {
    this.productoActual = null;
    let response = this.productoService.buscar(this.query);
    this.productos = response.data;
  }

  onAgregar(producto) {
    this.productoActual = producto;
    this.cantidadSolicitada = 1;
  }

  onAgregarCarrito() {
    this.cart.push({
      producto: this.productoActual,
      cantidad: this.cantidadSolicitada
    });
    this.productoActual = null;
    this.productos = [];
  }

  gotoSummary() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.router.navigate(['/cotiza/new/summary']);
  }
}
