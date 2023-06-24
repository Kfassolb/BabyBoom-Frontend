import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipocomprobanteComponent } from './components/tipocomprobante/tipocomprobante.component';
import { TipocomprobanteListarComponent } from './components/tipocomprobante/tipocomprobante-listar/tipocomprobante-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { UsuarioCreaeditaComponent } from './components/usuario/usuario-creaedita/usuario-creaedita.component';
import { TipocomprobanteCreaeditaComponent } from './components/tipocomprobante/tipocomprobante-creaedita/tipocomprobante-creaedita.component'
import { ServicioCreaditaComponent } from './components/servicio/servicio-creadita/servicio-creadita.component';
import { UsuarioListarComponent } from './components/usuario/usuario-listar/usuario-listar.component';
import { TiposuscripcionComponent } from './components/tiposuscripcion/tiposuscripcion.component';
import { TiposuscripcionListarComponent } from './components/tiposuscripcion/tiposuscripcion-listar/tiposuscripcion-listar.component';
import { TiposuscripcionCreaeditaComponent } from './components/tiposuscripcion/tiposuscripcion-creaedita/tiposuscripcion-creaedita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import{MatInputModule} from '@angular/material/input'
import{MatSelectModule} from '@angular/material/select'


import { ServicioComponent } from './components/servicio/servicio.component';
import { ServicioDialogoComponent } from './components/servicio/servicio-listar/servicio-dialogo/servicio-dialogo.component'

import { ServicioListarComponent } from './components/servicio/servicio-listar/servicio-listar.component'
import { MatIconModule } from '@angular/material/icon';
import { TipoenfermedadComponent } from './components/tipoenfermedad/tipoenfermedad.component';
import { TipoenfermedadListarComponent } from './components/tipoenfermedad/tipoenfermedad-listar/tipoenfermedad-listar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TipocomprobanteDialogoComponent } from './components/tipocomprobante/tipocomprobante-listar/tipocomprobante-dialogo/tipocomprobante-dialogo.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { TipoenfermedadCreareditarComponent } from './components/tipoenfermedad/tipoenfermedad-creareditar/tipoenfermedad-creareditar.component';
import { TipoenfermedadDialogoComponent } from './components/tipoenfermedad/tipoenfermedad-listar/tipoenfermedad-dialogo/tipoenfermedad-dialogo.component';
import { UsuarioDialogoComponent } from './components/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ProductoComponent } from './components/producto/producto.component';
import { ProductoListarComponent } from './components/producto/producto-listar/producto-listar.component';
import { ProductoCreaeditaComponent } from './components/producto/producto-creaedita/producto-creaedita.component';
import { ProductoDialogoComponent } from './components/producto/producto-listar/producto-dialogo/producto-dialogo.component';
import { TiposuscripcionDialogoComponent } from './components/tiposuscripcion/tiposuscripcion-listar/tiposuscripcion-dialogo/tiposuscripcion-dialogo.component';
import { CompraproductoComponent } from './components/compraproducto/compraproducto.component';
import { CompraproductoCreaeditaComponent } from './components/compraproducto/compraproducto-creaedita/compraproducto-creaedita.component';
import { CompraproductoListarComponent } from './components/compraproducto/compraproducto-listar/compraproducto-listar.component';
import { ProblemaComponent } from './components/problema/problema.component';
import { ProblemaCreaeditaComponent } from './components/problema/problema-creaedita/problema-creaedita.component';
import { ProblemaListarComponent } from './components/problema/problema-listar/problema-listar.component';
import { SoportetecnicoComponent } from './components/soportetecnico/soportetecnico.component';
import { SoportetecnicoCreaeditaComponent } from './components/soportetecnico/soportetecnico-creaedita/soportetecnico-creaedita.component';
import { SoportetecnicoListarComponent } from './components/soportetecnico/soportetecnico-listar/soportetecnico-listar.component';
import { ProblemaDialogoComponent } from './components/problema/problema-listar/problema-dialogo/problema-dialogo.component';
import { SoportetecnicoDialogoComponent } from './components/soportetecnico/soportetecnico-listar/soportetecnico-dialogo/soportetecnico-dialogo.component';
import { CompraproductoDialogoComponent } from './components/compraproducto/compraproducto-listar/compraproducto-dialogo/compraproducto-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
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
    CompraproductoComponent,
    CompraproductoCreaeditaComponent,
    CompraproductoListarComponent,
    ProblemaComponent,
    ProblemaCreaeditaComponent,
    ProblemaListarComponent,
    SoportetecnicoComponent,
    SoportetecnicoCreaeditaComponent,
    SoportetecnicoListarComponent,
    ProblemaDialogoComponent,
    SoportetecnicoDialogoComponent,
    CompraproductoDialogoComponent,


  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatPaginatorModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
