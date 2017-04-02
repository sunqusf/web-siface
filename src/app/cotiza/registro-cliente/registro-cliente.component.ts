import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import emailMask from 'text-mask-addons/dist/emailMask';

import { ClienteService } from '../../services/cliente.service';
import { CotizacionService } from '../../services/cotizacion.service';
import { TipoPagoService } from '../../services/tipopago.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css'],
  providers: [ClienteService, CotizacionService, TipoPagoService]
})
export class RegistroClienteComponent implements OnInit {
  cart;
  model;
  contact;
  tipoPago;
  tipoPagoId:number;
  numberMask = createNumberMask({
    prefix: '',
    allowDecimal: false,
    includeThousandsSeparator: false
  });
  emailMask = emailMask;

  constructor(private router:Router, private clienteService:ClienteService, private cotizacionService:CotizacionService, private tipoPagoService:TipoPagoService) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.model = {};
    this.contact = {};
    this.tipoPago = [];
    this.tipoPagoService.cargar().subscribe(data => {
      this.tipoPago = data;
      if (this.tipoPago.length > 0) {
        this.tipoPagoId = this.tipoPago[0].id;
      }
    });
  }

  onBlurRuc() {
    this.clienteService.buscar(this.model.ruc).subscribe(data => {
      let contents = data.content;
      if (contents.length > 0) {
        this.model = contents[0];
      }
    });
  }

  onRegistrar() {
    let requestData = {
      code: '',
      contactName: this.contact.name,
      contactPhone: this.contact.phone,
      contactEmail: this.contact.email,
      customer: this.model,
      paymentTermId : this.tipoPagoId,
      details: []
    }

    for (let i = 0; i < this.cart.length; i++) {
      let cartItem = this.cart[i];
      requestData.details.push({
        inventoryId: cartItem.producto.id,
        quantity: cartItem.cantidad,
        unitPrice: cartItem.producto.unitPrice
      });
    }

    this.cotizacionService.registrar(requestData).subscribe(res => {
      this.router.navigate(['/cotiza/new/success']);
    });
  }
}
