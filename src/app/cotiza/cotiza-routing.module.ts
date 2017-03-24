import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { BuscarProductoComponent }    from './buscar-producto/buscar-producto.component';
import { BuscarCotizacionComponent }    from './buscar-cotizacion/buscar-cotizacion.component';

const routes: Routes = [
  { path: 'search',    component: BuscarCotizacionComponent },
  { path: 'new/search',    component: BuscarProductoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizaRoutingModule {}
