
import { SoportetecnicoCreaeditaComponent } from './soportetecnico/soportetecnico-creaedita/soportetecnico-creaedita.component';
import { GuarderiaservicioListarComponent } from './guarderiaservicio/guarderiaservicio-listar/guarderiaservicio-listar.component';
import { GuarderiaservicioComponent } from './guarderiaservicio/guarderiaservicio.component';
import { ControlvacunacionCreaeditaComponent } from './controlvacunacion/controlvacunacion-creaedita/controlvacunacion-creaedita.component';
import { ControlvacunacionListarComponent } from './controlvacunacion/controlvacunacion-listar/controlvacunacion-listar.component';
import { ControlvacunacionComponent } from './controlvacunacion/controlvacunacion.component';
import { CompraproductoCreaeditaComponent } from './compraproducto/compraproducto-creaedita/compraproducto-creaedita.component';
import { CompraproductoListarComponent } from './compraproducto/compraproducto-listar/compraproducto-listar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { TipocomprobanteComponent } from './tipocomprobante/tipocomprobante.component';
import { TipocomprobanteListarComponent } from './tipocomprobante/tipocomprobante-listar/tipocomprobante-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { UsuarioComponent } from './usuario/usuario.component';

import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';
import { TipocomprobanteCreaeditaComponent } from './tipocomprobante/tipocomprobante-creaedita/tipocomprobante-creaedita.component'
import { ServicioCreaditaComponent } from './servicio/servicio-creadita/servicio-creadita.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { TiposuscripcionComponent } from './tiposuscripcion/tiposuscripcion.component';
import { TiposuscripcionListarComponent } from './tiposuscripcion/tiposuscripcion-listar/tiposuscripcion-listar.component';
import { TiposuscripcionCreaeditaComponent } from './tiposuscripcion/tiposuscripcion-creaedita/tiposuscripcion-creaedita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import{MatInputModule} from '@angular/material/input'
import{MatSelectModule} from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';


import { ServicioComponent } from './servicio/servicio.component';
import { ServicioDialogoComponent } from './servicio/servicio-listar/servicio-dialogo/servicio-dialogo.component'

import { ServicioListarComponent } from './servicio/servicio-listar/servicio-listar.component'
import { MatIconModule } from '@angular/material/icon';
import { TipoenfermedadComponent } from './tipoenfermedad/tipoenfermedad.component';
import { TipoenfermedadListarComponent } from './tipoenfermedad/tipoenfermedad-listar/tipoenfermedad-listar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TipocomprobanteDialogoComponent } from './tipocomprobante/tipocomprobante-listar/tipocomprobante-dialogo/tipocomprobante-dialogo.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { TipoenfermedadCreareditarComponent } from './tipoenfermedad/tipoenfermedad-creareditar/tipoenfermedad-creareditar.component';
import { TipoenfermedadDialogoComponent } from './tipoenfermedad/tipoenfermedad-listar/tipoenfermedad-dialogo/tipoenfermedad-dialogo.component';
import { UsuarioDialogoComponent } from './usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ProductoComponent } from './producto/producto.component';
import { ProductoListarComponent } from './producto/producto-listar/producto-listar.component';
import { ProductoCreaeditaComponent } from './producto/producto-creaedita/producto-creaedita.component';
import { ProductoDialogoComponent } from './producto/producto-listar/producto-dialogo/producto-dialogo.component';
import { TiposuscripcionDialogoComponent } from './tiposuscripcion/tiposuscripcion-listar/tiposuscripcion-dialogo/tiposuscripcion-dialogo.component';
import { MedicoComponent } from './medico/medico.component';
import { MedicoCreaeditaComponent } from './medico/medico-creaedita/medico-creaedita.component';
import { MedicoListarComponent } from './medico/medico-listar/medico-listar.component';
import { MedicoDialogoComponent } from './medico/medico-listar/medico-dialogo/medico-dialogo.component';
import { ApoderadoComponent } from './apoderado/apoderado.component';
import { ApoderadoCreaeditaComponent } from './apoderado/apoderado-creaedita/apoderado-creaedita.component';
import { ApoderadoListarComponent } from './apoderado/apoderado-listar/apoderado-listar.component';
import { ApoderadoDialogoComponent } from './apoderado/apoderado-listar/apoderado-dialogo/apoderado-dialogo.component';

import { BebeComponent } from './bebe/bebe.component';
import { BebeListarComponent } from './bebe/bebe-listar/bebe-listar.component';
import { BebeDialogoComponent } from './bebe/bebe-listar/bebe-dialogo/bebe-dialogo.component';
import { BebeCreaeditaComponent } from './bebe/bebe-creaedita/bebe-creaedita.component';
import { EnfermedadbebeComponent } from './enfermedadbebe/enfermedadbebe.component';
import { EnfermedadbebeCreaeditaComponent } from './enfermedadbebe/enfermedadbebe-creaedita/enfermedadbebe-creaedita.component';
import { EnfermedadbebeListarComponent } from './enfermedadbebe/enfermedadbebe-listar/enfermedadbebe-listar.component';
import { EnfermedadbebeDialogoComponent } from './enfermedadbebe/enfermedadbebe-listar/enfermedadbebe-dialogo/enfermedadbebe-dialogo.component';
//import { LoginComponent } from './login/login.component';
import { CompraComponent } from './compra/compra.component';
import { CompraListarComponent } from './compra/compra-listar/compra-listar.component';
import { CompraCreaeditaComponent } from './compra/compra-creaedita/compra-creaedita.component';
import { GuarderiaComponent } from './guarderia/guarderia.component';
import { GuarderiaListarComponent } from './guarderia/guarderia-listar/guarderia-listar.component';
import { GuarderiaCreaeditaComponent } from './guarderia/guarderia-creaedita/guarderia-creaedita.component';
import { GuarderiaDialogoComponent } from './guarderia/guarderia-listar/guarderia-dialogo/guarderia-dialogo.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BebevacunaCreaeditaComponent } from './bebevacuna/bebevacuna-creaedita/bebevacuna-creaedita.component';
//import { ToolbarComponent } from './toolbar/toolbar.component';
import { BebevacunaComponent } from './bebevacuna/bebevacuna.component';
import { BebevacunaListarComponent } from './bebevacuna/bebevacuna-listar/bebevacuna-listar.component';
import { ProblemaComponent } from './problema/problema.component';
import { ProblemaCreaeditaComponent } from './problema/problema-creaedita/problema-creaedita.component';
import { ProblemaListarComponent } from './problema/problema-listar/problema-listar.component';
import { CompraproductoComponent } from './compraproducto/compraproducto.component';
import { SoportetecnicoComponent } from './soportetecnico/soportetecnico.component';
import { SoportetecnicoListarComponent } from './soportetecnico/soportetecnico-listar/soportetecnico-listar.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PublicacionListarComponent } from './publicacion/publicacion-listar/publicacion-listar.component';
import { PublicacionCreaeditarComponent } from './publicacion/publicacion-creaeditar/publicacion-creaeditar.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { ComunidadListarComponent } from './comunidad/comunidad-listar/comunidad-listar.component';
import { ComunidadCreaeditarComponent } from './comunidad/comunidad-creaeditar/comunidad-creaeditar.component';
import { ComunidadDialogoComponent } from './comunidad/comunidad-listar/comunidad-dialogo/comunidad-dialogo.component';
import { CitamedicaComponent } from './citamedica/citamedica.component';
import { CitamedicaListarComponent } from './citamedica/citamedica-listar/citamedica-listar.component';
import { CitamedicaCreaeditarComponent } from './citamedica/citamedica-creaeditar/citamedica-creaeditar.component';
import { CitamedicaDialogoComponent } from './citamedica/citamedica-listar/citamedica-dialogo/citamedica-dialogo.component';
import { ControlvacunacionDialogoComponent } from './controlvacunacion/controlvacunacion-listar/controlvacunacion-dialogo/controlvacunacion-dialogo.component';
import { ReportesComponent } from './reportes/reportes.component';
import { Reportellb1Component } from './reportes/reportellb1/reportellb1.component';
import { Reportellb2Component } from './reportes/reportellb2/reportellb2.component';



@NgModule({
  declarations: [
    //AppComponent,
    TipocomprobanteComponent,
    TipocomprobanteListarComponent,
    UsuarioListarComponent,
    UsuarioComponent,
    UsuarioCreaeditaComponent,
    ServicioComponent,
    ServicioListarComponent,
    TipocomprobanteCreaeditaComponent,
    TipoenfermedadComponent,
    TipoenfermedadListarComponent,
    TipocomprobanteDialogoComponent,
    TipoenfermedadCreareditarComponent,
    TipoenfermedadDialogoComponent,
    UsuarioDialogoComponent,
    ProductoComponent,
    ProductoListarComponent,
    ProductoCreaeditaComponent,
    ProductoDialogoComponent,
    ServicioListarComponent,
    TipocomprobanteCreaeditaComponent,
    ServicioCreaditaComponent,
    ServicioDialogoComponent,
    TiposuscripcionComponent,
    TiposuscripcionListarComponent,
    TiposuscripcionCreaeditaComponent,
    TiposuscripcionDialogoComponent,
    TipocomprobanteDialogoComponent,
    MedicoComponent,
    MedicoCreaeditaComponent,
    MedicoListarComponent,
    MedicoDialogoComponent,
    BebeComponent,
    BebeListarComponent,
    BebeCreaeditaComponent,
    BebeDialogoComponent,
    //LoginComponent,
    EnfermedadbebeComponent,
    EnfermedadbebeCreaeditaComponent,
    EnfermedadbebeListarComponent,
    EnfermedadbebeDialogoComponent,
    CompraComponent,
    CompraListarComponent,
    CompraCreaeditaComponent,
    GuarderiaComponent,
    GuarderiaListarComponent,
    GuarderiaCreaeditaComponent,
    GuarderiaDialogoComponent,
    ApoderadoComponent,
    ApoderadoCreaeditaComponent,
    ApoderadoListarComponent,
    ApoderadoDialogoComponent,
    SignUpComponent,
    BebevacunaCreaeditaComponent,
    BebevacunaComponent,
    BebevacunaListarComponent,

    ProblemaComponent,
    ProblemaListarComponent,
    ProblemaCreaeditaComponent,

    CompraproductoComponent,
    CompraproductoCreaeditaComponent,
    CompraproductoListarComponent,

    ControlvacunacionComponent,
    ControlvacunacionListarComponent,
    ControlvacunacionCreaeditaComponent,
    ControlvacunacionDialogoComponent,

    GuarderiaservicioComponent,
    GuarderiaListarComponent,
    GuarderiaservicioListarComponent,

    SoportetecnicoCreaeditaComponent,
    SoportetecnicoListarComponent,
    SoportetecnicoComponent,
    PublicacionComponent,
    PublicacionListarComponent,
    PublicacionCreaeditarComponent,
    ComunidadComponent,
    ComunidadListarComponent,
    ComunidadCreaeditarComponent,
    ComunidadDialogoComponent,
    CitamedicaComponent,
    CitamedicaListarComponent,
    CitamedicaCreaeditarComponent,
    CitamedicaDialogoComponent,
    ReportesComponent,
    Reportellb1Component,
    Reportellb2Component,
    //ToolbarComponent

  ],
  imports: [
    //AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    PagesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ReactiveFormsModule,

    // MatInputModule,
    // BrowserAnimationsModule,
    // MatIconModule,
    // MatSlideToggleModule,
    // MatDialogModule,
    MatPaginatorModule,
    // BrowserModule,


  ],
  // providers: [],
  // bootstrap: [AppComponent]
  exports: [
    MatFormFieldModule
    ]
})
export class PagesModule { }
