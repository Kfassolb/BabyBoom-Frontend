import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './components/usuario/usuario-creaedita/usuario-creaedita.component';
import { TipocomprobanteComponent } from './components/tipocomprobante/tipocomprobante.component';
import { TipocomprobanteListarComponent } from './components/tipocomprobante/tipocomprobante-listar/tipocomprobante-listar.component';

import { ServicioListarComponent } from './components/servicio/servicio-listar/servicio-listar.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoListarComponent } from './components/producto/producto-listar/producto-listar.component';
import { ProductoCreaeditaComponent } from './components/producto/producto-creaedita/producto-creaedita.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipocomprobanteCreaeditaComponent } from './components/tipocomprobante/tipocomprobante-creaedita/tipocomprobante-creaedita.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ServicioCreaditaComponent } from './components/servicio/servicio-creadita/servicio-creadita.component';

import { TipoenfermedadComponent } from './components/tipoenfermedad/tipoenfermedad.component';
import { TipoenfermedadListarComponent } from './components/tipoenfermedad/tipoenfermedad-listar/tipoenfermedad-listar.component';
import { TipoenfermedadCreareditarComponent } from './components/tipoenfermedad/tipoenfermedad-creareditar/tipoenfermedad-creareditar.component';
import { TiposuscripcionComponent } from './components/tiposuscripcion/tiposuscripcion.component';
import { TiposuscripcionCreaeditaComponent } from './components/tiposuscripcion/tiposuscripcion-creaedita/tiposuscripcion-creaedita.component';
import { BebeComponent } from './components/bebe/bebe.component';
import { BebeCreaeditaComponent } from './components/bebe/bebe-creaedita/bebe-creaedita.component';
import { EnfermedadbebeComponent } from './components/enfermedadbebe/enfermedadbebe.component';
import { EnfermedadbebeCreaeditaComponent } from './components/enfermedadbebe/enfermedadbebe-creaedita/enfermedadbebe-creaedita.component';
import { EnfermedadbebeDialogoComponent } from './components/enfermedadbebe/enfermedadbebe-listar/enfermedadbebe-dialogo/enfermedadbebe-dialogo.component';
import { ControlvacunacionComponent } from './components/controlvacunacion/controlvacunacion.component';
import { ControlvacunacionCreaeditaComponent } from './components/controlvacunacion/controlvacunacion-creaedita/controlvacunacion-creaedita.component';
import { ProblemaComponent } from './components/problema/problema.component';
import { ProblemaCreaeditaComponent } from './components/problema/problema-creaedita/problema-creaedita.component';
import { ApoderadoComponent } from './components/apoderado/apoderado.component';
import { ApoderadoCreaeditarComponent } from './components/apoderado/apoderado-creaeditar/apoderado-creaeditar.component';


const routes: Routes = [
  {
    path: 'Usuario', component:UsuarioComponent, children: [
      {path:'agregar', component:UsuarioCreaeditaComponent},
      {path:'editar/:id', component:UsuarioCreaeditaComponent}
    ]
  },
  {
    path:'tipocomprobantes', component:TipocomprobanteComponent, children:[
      {path:'tipocomprobanteeditar',component:TipocomprobanteCreaeditaComponent},
      {path:'edicion/:id',component:TipocomprobanteCreaeditaComponent},
    ]
  },
  {
    path: 'Enfermedad', component:TipoenfermedadComponent, children: [
      {path:'agregar', component:TipoenfermedadCreareditarComponent},
      {path: 'edicion/:id',component:TipoenfermedadCreareditarComponent},
    ],
  },
  {
    path: 'Producto', component:ProductoComponent, children: [
      {path:'agregar', component:ProductoCreaeditaComponent},
      {path:'edicion/:id',component:ProductoCreaeditaComponent},
    ],
  },
  {
    path:'servicio', component:ServicioComponent,children:[
      {path:'servicioeditar',component:ServicioCreaditaComponent},
      { path: 'edicion/:id', component: ServicioCreaditaComponent }
    ]
  },
  {

    path:'TiposSuscripcion', component:TiposuscripcionComponent,children:[
      {path:'Suscripcioneditar', component:TiposuscripcionCreaeditaComponent},
      {path:'edicion/:id', component:TiposuscripcionCreaeditaComponent},
    ],
  },
  {
    path:'Bebe', component:BebeComponent,children:[
      {path:'agregar', component:BebeCreaeditaComponent},
      {path:'edicion/:id', component:BebeCreaeditaComponent},
    ],
  },
  {
    path:'Sintomas', component:EnfermedadbebeComponent,children:[
      {path:'agregar', component:EnfermedadbebeCreaeditaComponent},
      {path:'edicion/:id', component:EnfermedadbebeDialogoComponent},
    ],
  },
  {
    path:'controlvacunacion', component:ControlvacunacionComponent,children:[
      {path:'controlvacunacioneditar',component:ControlvacunacionCreaeditaComponent},
      { path: 'edicion/:id', component: ControlvacunacionCreaeditaComponent }
    ]
  },
  {
    path: 'problemas',component:ProblemaComponent, children:[
      {path:'agregar',component:ProblemaCreaeditaComponent},
      {path:'edicion/:id',component:ProblemaCreaeditaComponent}
    ]
  },
  {
    path: 'apoderados',component:ApoderadoComponent, children:[
      {path:'agregar',component:ApoderadoCreaeditarComponent},
      {path:'edicion/:id',component:ApoderadoCreaeditarComponent}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
