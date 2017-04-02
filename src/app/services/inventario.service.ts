import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import * as globals from './globals';

@Injectable()
export class InventarioService {
  baseUrl:string;

  constructor(private http:HttpService) {
    this.baseUrl = globals.BASE_URL + 'siface-inventory/inventories';

  }
  buscar(query) {
    let url = this.baseUrl + '?description='+query+'&size='+1000;
    return this.http.get(url).map(res => res.json());
  }

}
