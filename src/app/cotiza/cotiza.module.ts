import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { CommonModule } from '@angular/common';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';

import { CotizaRoutingModule } from './cotiza-routing.module';
import { BuscarCotizacionComponent } from './buscar-cotizacion/buscar-cotizacion.component';
import { ResumenCotizacionComponent } from './resumen-cotizacion/resumen-cotizacion.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { CotizaSuccessComponent } from './cotiza-success/cotiza-success.component';
import { DetalleCotizacionComponent } from './detalle-cotizacion/detalle-cotizacion.component';

import { PagingComponent } from '../utils/paging.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
    CotizaRoutingModule
  ],
  declarations: [PagingComponent, BuscarProductoComponent, BuscarCotizacionComponent, ResumenCotizacionComponent, RegistroClienteComponent, CotizaSuccessComponent, DetalleCotizacionComponent]
})
export class CotizaModule { }
