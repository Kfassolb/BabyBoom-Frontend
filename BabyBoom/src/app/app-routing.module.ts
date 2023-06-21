import { TipocomprobanteComponent } from './components/tipocomprobante/tipocomprobante.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipocomprobanteCreaeditaComponent } from './components/tipocomprobante/tipocomprobante-creaedita/tipocomprobante-creaedita.component';
import { ServicioCompoment } from './components/servicio/servicio.component';
import { ServicioCreaditaComponent } from './components/servicio/servicio-creadita/servicio-creadita.component';
import { ControlvacunacionCreaeditaComponent } from './components/controlvacunacion/controlvacunacion-creaedita/controlvacunacion-creaedita.component';
import { ControlvacunacionComponent } from './components/controlvacunacion/controlvacunacion.component';
import { BebevacunaComponent } from './components/bebevacuna/bebevacuna.component';
import { BebevacunaCreaditaComponent } from './components/bebevacuna/bebevacuna-creadita/bebevacuna-creadita.component';
import { GuarderiaservicioComponent } from './components/guarderiaservicio/guarderiaservicio.component';
import { GuarderiaservicioCreaditaComponent } from './components/guarderiaservicio/guarderiaservicio-creadita/guarderiaservicio-creadita.component';

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
    path:'controlvacunacion', component:ControlvacunacionComponent,children:[
      {path:'controlvacunacioneditar',component:ControlvacunacionCreaeditaComponent},
      { path: 'edicion/:id', component: ControlvacunacionCreaeditaComponent }
    ]
  },
  {
    path:'bebevacuna', component:BebevacunaComponent,children:[
      {path:'bebevacunaeditar',component:BebevacunaCreaditaComponent}
    ]
  },
  {
    path:'guarderiaservicio', component:GuarderiaservicioComponent,children:[
      {path:'guarderiaservicioeditar',component:GuarderiaservicioCreaditaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
