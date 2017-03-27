import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  cart;
  model;

  constructor(private router: Router) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.model = {};
  }

  onRegistrar() {
    console.log(JSON.stringify({
      cliente: this.model,
      cart: this.cart
    }));
    this.router.navigate(['/cotiza/new/success']);
  }
}
