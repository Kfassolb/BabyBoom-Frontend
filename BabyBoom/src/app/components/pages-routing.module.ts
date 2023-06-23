import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';
import { MedicoComponent } from './medico/medico.component';
import { MedicoCreaeditaComponent } from './medico/medico-creaedita/medico-creaedita.component';
import { ApoderadoComponent } from './apoderado/apoderado.component';
import { ApoderadoCreaeditaComponent } from './apoderado/apoderado-creaedita/apoderado-creaedita.component';
import { TipocomprobanteComponent } from './tipocomprobante/tipocomprobante.component';
import { TipocomprobanteCreaeditaComponent } from './tipocomprobante/tipocomprobante-creaedita/tipocomprobante-creaedita.component';
import { TipoenfermedadComponent } from './tipoenfermedad/tipoenfermedad.component';
import { TipoenfermedadCreareditarComponent } from './tipoenfermedad/tipoenfermedad-creareditar/tipoenfermedad-creareditar.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoCreaeditaComponent } from './producto/producto-creaedita/producto-creaedita.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicioCreaditaComponent } from './servicio/servicio-creadita/servicio-creadita.component';
import { TiposuscripcionComponent } from './tiposuscripcion/tiposuscripcion.component';
import { TiposuscripcionCreaeditaComponent } from './tiposuscripcion/tiposuscripcion-creaedita/tiposuscripcion-creaedita.component';
import { BebeComponent } from './bebe/bebe.component';
import { BebeCreaeditaComponent } from './bebe/bebe-creaedita/bebe-creaedita.component';
import { EnfermedadbebeComponent } from './enfermedadbebe/enfermedadbebe.component';
import { EnfermedadbebeCreaeditaComponent } from './enfermedadbebe/enfermedadbebe-creaedita/enfermedadbebe-creaedita.component';
import { CompraComponent } from './compra/compra.component';
import { CompraCreaeditaComponent } from './compra/compra-creaedita/compra-creaedita.component';
import { EnfermedadbebeDialogoComponent } from './enfermedadbebe/enfermedadbebe-listar/enfermedadbebe-dialogo/enfermedadbebe-dialogo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GuarderiaComponent } from './guarderia/guarderia.component';
import { GuarderiaCreaeditaComponent } from './guarderia/guarderia-creaedita/guarderia-creaedita.component';
import { BebevacunaComponent } from './bebevacuna/bebevacuna.component';
import { BebevacunaCreaeditaComponent } from './bebevacuna/bebevacuna-creaedita/bebevacuna-creaedita.component';
import { ProblemaComponent } from './problema/problema.component';
import { ProblemaCreaeditaComponent } from './problema/problema-creaedita/problema-creaedita.component';
import { ControlvacunacionComponent } from './controlvacunacion/controlvacunacion.component';
import { ControlvacunacionCreaeditaComponent } from './controlvacunacion/controlvacunacion-creaedita/controlvacunacion-creaedita.component';
import { ControlvacunacionListarComponent } from './controlvacunacion/controlvacunacion-listar/controlvacunacion-listar.component';
import { CompraproductoComponent } from './compraproducto/compraproducto.component';
import { CompraproductoCreaeditaComponent } from './compraproducto/compraproducto-creaedita/compraproducto-creaedita.component';
import { GuarderiaservicioComponent } from './guarderiaservicio/guarderiaservicio.component';
import { compileClassMetadata } from '@angular/compiler';
import { SoportetecnicoComponent } from './soportetecnico/soportetecnico.component';
import { SoportetecnicoCreaeditaComponent } from './soportetecnico/soportetecnico-creaedita/soportetecnico-creaedita.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PublicacionCreaeditarComponent } from './publicacion/publicacion-creaeditar/publicacion-creaeditar.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { ComunidadCreaeditarComponent } from './comunidad/comunidad-creaeditar/comunidad-creaeditar.component';
import { CitamedicaComponent } from './citamedica/citamedica.component';
import { CitamedicaCreaeditarComponent } from './citamedica/citamedica-creaeditar/citamedica-creaeditar.component';


const routes: Routes = [
  {
    path: 'toolbar', component:ToolbarComponent
  },
  {
    path: 'signUp', component:SignUpComponent
  },
  {
    path: 'users', component:UsuarioComponent, children: [
      {path:'agregar', component:UsuarioCreaeditaComponent},
      {path:'editar/:id', component:UsuarioCreaeditaComponent}
    ],canActivate:[GuardService]
  },

  {
    path: 'medicos', component:MedicoComponent, children: [
      {path:'agregar', component:MedicoCreaeditaComponent},
      {path:'editar/:id', component:MedicoCreaeditaComponent}
    ],canActivate:[GuardService]
  },
  {
    path: 'apoderados', component:ApoderadoComponent, children: [
      {path:'agregar', component:ApoderadoCreaeditaComponent},
      {path:'editar/:id', component:ApoderadoCreaeditaComponent}
    ],canActivate:[GuardService]
  },
  {
    path:'tipocomprobantes', component:TipocomprobanteComponent, children:[
      {path:'tipocomprobanteeditar',component:TipocomprobanteCreaeditaComponent},
      {path:'edicion/:id',component:TipocomprobanteCreaeditaComponent},
    ],canActivate:[GuardService]
  },
  {
    path: 'Enfermedad', component:TipoenfermedadComponent, children: [
      {path:'agregar', component:TipoenfermedadCreareditarComponent},
      {path: 'edicion/:id',component:TipoenfermedadCreareditarComponent},
    ],canActivate:[GuardService]
  },
  {
    path: 'productos', component:ProductoComponent, children: [
      {path:'agregar', component:ProductoCreaeditaComponent},
      {path:'edicion/:id',component:ProductoCreaeditaComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'servicio', component:ServicioComponent,children:[
      {path:'servicioeditar',component:ServicioCreaditaComponent},
      { path: 'edicion/:id', component: ServicioCreaditaComponent }
    ],canActivate:[GuardService]
  },
  {
    path:'TiposSuscripcion', component:TiposuscripcionComponent,children:[
      {path:'Suscripcioneditar', component:TiposuscripcionCreaeditaComponent},
      {path:'edicion/:id', component:TiposuscripcionCreaeditaComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'Bebe', component:BebeComponent,children:[
      {path:'agregar', component:BebeCreaeditaComponent},
      {path:'edicion/:id', component:BebeCreaeditaComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'Sintomas', component:EnfermedadbebeComponent,children:[
      {path:'agregar', component:EnfermedadbebeCreaeditaComponent},
      {path:'edicion/:id', component:EnfermedadbebeDialogoComponent},
    ],canActivate:[GuardService]
  },
  {
    path: 'compras', component:CompraComponent,children:[
      {path:'nuevo', component:CompraCreaeditaComponent},
    ],canActivate:[GuardService]
  },
  {
    path: 'guarderias', component:GuarderiaComponent, children: [
      {path:'agregar', component:GuarderiaCreaeditaComponent},
      {path:'editar/:id', component:GuarderiaCreaeditaComponent}
    ],canActivate:[GuardService]
  },
  {
    path:'bebevacunas', component:BebevacunaComponent, children: [
      {path: 'agregar', component:BebevacunaCreaeditaComponent },
    ],canActivate:[GuardService]

  },
  {
    path: 'problemas',component:ProblemaComponent,children:[
      {path:'agregar',component:ProblemaCreaeditaComponent},
    ],canActivate:[GuardService]

  },
  {
    path: 'controlvacunas',component:ControlvacunacionComponent,children:[
      {path: 'agregar',component:ControlvacunacionCreaeditaComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'compraproductos',component:CompraproductoComponent,children:[
      {path: 'agregar', component:CompraproductoCreaeditaComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'guarderiaservicios', component:GuarderiaservicioComponent, children:[
    ],canActivate:[GuardService]
  },
  {
    path: 'soportetecnicos',component:SoportetecnicoComponent,children:[
      {path: 'agregar', component:SoportetecnicoCreaeditaComponent},
      {path: 'editar/:id', component:SoportetecnicoCreaeditaComponent},
    ],canActivate:[GuardService]
  }
  ,
  {
    path: 'publicaciones',component:PublicacionComponent,children:[
      {path: 'agregar', component:PublicacionCreaeditarComponent},
    ],canActivate:[GuardService]
  },
  {
    path: 'comunidades',component:ComunidadComponent,children:[
      {path: 'agregar', component:ComunidadCreaeditarComponent},
      {path: 'editar/:id', component:ComunidadCreaeditarComponent},
    ],canActivate:[GuardService]
  },
  {
    path: 'citamedicas',component:CitamedicaComponent,children:[
      {path: 'agregar',component:CitamedicaCreaeditarComponent}
    ],canActivate:[GuardService]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
