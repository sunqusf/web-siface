import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { ProductoService } from '../../services/producto.service';
import { InventarioService } from '../../services/inventario.service';

import { PagingComponent } from '../../utils/paging.component';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css'],
  providers: [InventarioService]
})
export class BuscarProductoComponent implements OnInit {
  productos;
  productoActual;
  query:string;
  cart;
  cantidadSolicitada;
  currentPage;
  response;
  cantidadSolicitadaErrorMessage:string;
  subtotal;
  numberMask = createNumberMask({
    prefix: '',
    allowDecimal: false,
    includeThousandsSeparator: false
  });

  constructor(private router: Router, private inventarioService: InventarioService) {
    this.productos = [];
    this.cart = [];
    this.query = '';
    this.currentPage = 0;
  }

  ngOnInit() {
    this.cantidadSolicitada = 1;
    this.productoActual = null;
    this.currentPage = 0;
    this.subtotal = 0;
    let cart = JSON.parse(localStorage.getItem('cart'));
    this.cart = cart != null ? cart : [];

    for (let i = 0; i < this.cart.length; i++) {
      this.subtotal = this.subtotal + this.cart[i].cantidad*this.cart[i].producto.unitPrice;
    }
  }

  onBuscar() {
    this.productoActual = null;
    this.inventarioService.buscar(this.query).subscribe(data => {
      this.response = data;
      this.productos = this.response.content;
      this.currentPage = this.response.page;
    });
  }

  onAgregar(producto) {
    this.productoActual = producto;
    this.cantidadSolicitada = 1;
    this.cantidadSolicitadaErrorMessage = '';
  }

  onAgregarCarrito() {
    if (this.cantidadSolicitada < 1) {
      this.cantidadSolicitadaErrorMessage = 'Ingrese una cantidad válida.';
      return;
    }
    let found = false;
    this.subtotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].producto.id == this.productoActual.id) {
        found = true;
        this.cart[i].cantidad = this.cantidadSolicitada;
        this.cart[i].producto = this.productoActual;
      }

      this.subtotal = this.subtotal + this.cart[i].cantidad*this.cart[i].producto.unitPrice;
    }
    if (!found) {
      this.cart.push({
        producto: this.productoActual,
        cantidad: this.cantidadSolicitada
      });
      this.subtotal = this.subtotal + this.cantidadSolicitada*this.productoActual.unitPrice;
    }
    this.productoActual = null;
    this.productos = [];
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  onQuitarCarrito(id) {
    console.log('asdf');
    let tmpCart = [];
    this.subtotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      console.log(id)
      console.log(this.cart[i].producto.id)
      if (this.cart[i].producto.id != id) {
        tmpCart.push(this.cart[i]);
        this.subtotal = this.subtotal + this.cart[i].cantidad*this.cart[i].producto.unitPrice;
      }
    }
    console.log(tmpCart);
    this.cart = tmpCart;
  }

  gotoSummary() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.router.navigate(['/cotiza/new/summary']);
  }

  onGotoPage(evt) {
    this.currentPage = evt;
    this.onBuscar();
  }
}
