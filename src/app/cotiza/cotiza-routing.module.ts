import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { BuscarProductoComponent }    from './buscar-producto/buscar-producto.component';
import { BuscarCotizacionComponent }    from './buscar-cotizacion/buscar-cotizacion.component';
import { ResumenCotizacionComponent }    from './resumen-cotizacion/resumen-cotizacion.component';
import { RegistroClienteComponent }    from './registro-cliente/registro-cliente.component';
import { CotizaSuccessComponent }    from './cotiza-success/cotiza-success.component';
import { DetalleCotizacionComponent }    from './detalle-cotizacion/detalle-cotizacion.component';

const routes: Routes = [
  { path: 'search',    component: BuscarCotizacionComponent },
  { path: 'detail/:id',    component: DetalleCotizacionComponent },
  { path: 'new/search',    component: BuscarProductoComponent },
  { path: 'new/summary',    component: ResumenCotizacionComponent },
  { path: 'new/client',    component: RegistroClienteComponent },
  { path: 'new/success',    component: CotizaSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizaRoutingModule {}
