import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import * as globals from './globals';

@Injectable()
export class TipoPagoService {
  baseUrl:string;

  constructor(private http:HttpService) {
    this.baseUrl = globals.BASE_URL + 'siface-billing/paymentTerms';

  }
  cargar() {
    let url = this.baseUrl;
    return this.http.get(url).map(res => res.json());
  }

}
