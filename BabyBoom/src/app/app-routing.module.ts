import { TipocomprobanteComponent } from './components/tipocomprobante/tipocomprobante.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipocomprobanteCreaeditaComponent } from './components/tipocomprobante/tipocomprobante-creaedita/tipocomprobante-creaedita.component';
import { ServicioCompoment } from './components/servicio/servicio.component';
import { ServicioCreaditaComponent } from './components/servicio/servicio-creadita/servicio-creadita.component';
import { ControlVacunacion } from './model/ControlVacunacion';
import { ControlvacunacionCreaeditaComponent } from './components/controlvacunacion/controlvacunacion-creaedita/controlvacunacion-creaedita.component';

const routes: Routes = [
  {
    path:'tipocomprobantes', component:TipocomprobanteComponent, children:[
      {path: 'tipocomprobanteeditar',component:TipocomprobanteCreaeditaComponent}
    ]
  },
  {
    path:'servicio', component:ServicioCompoment,children:[
      {path:'servicioeditar',component:ServicioCreaditaComponent},
      { path: 'edicion/:id', component: ServicioCreaditaComponent }
    ]
  },
  {
    path:'controlvacunacion', component:ControlVacunacion,children:[
      {path:'controlvacunacionoeditar',component:ControlvacunacionCreaeditaComponent},
      { path: 'edicion/:id', component: ControlvacunacionCreaeditaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
