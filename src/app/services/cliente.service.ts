import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import * as globals from './globals';

@Injectable()
export class ClienteService {
  baseUrl:string;

  constructor(private http:HttpService) {
    this.baseUrl = globals.BASE_URL + 'siface-billing/customers';

  }

  buscar(query) {
    let url = this.baseUrl + '?ruc='+query+'&size='+1;
    return this.http.get(url).map(res => res.json());
  }

}
