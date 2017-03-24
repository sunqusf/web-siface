import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';

import { CotizaRoutingModule } from './cotiza-routing.module';
import { BuscarCotizacionComponent } from './buscar-cotizacion/buscar-cotizacion.component';

@NgModule({
  imports: [
    CommonModule,
    CotizaRoutingModule
  ],
  declarations: [BuscarProductoComponent, BuscarCotizacionComponent]
})
export class CotizaModule { }
