import { ApoderadoCreaeditarComponent } from './components/apoderado/apoderado-creaeditar/apoderado-creaeditar.component';
import { ApoderadoListarComponent } from './components/apoderado/apoderado-listar/apoderado-listar.component';
import { EnfermedadbebeCreaeditaComponent } from './components/enfermedadbebe/enfermedadbebe-creaedita/enfermedadbebe-creaedita.component';
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
import { BebeListarComponent } from './components/bebe/bebe-listar/bebe-listar.component';
import { UsuarioCreaeditaComponent } from './components/usuario/usuario-creaedita/usuario-creaedita.component';
import { TipocomprobanteCreaeditaComponent } from './components/tipocomprobante/tipocomprobante-creaedita/tipocomprobante-creaedita.component'

import { UsuarioListarComponent } from './components/usuario/usuario-listar/usuario-listar.component';
import { TiposuscripcionComponent } from './components/tiposuscripcion/tiposuscripcion.component';
import { TiposuscripcionListarComponent } from './components/tiposuscripcion/tiposuscripcion-listar/tiposuscripcion-listar.component';
import { TiposuscripcionCreaeditaComponent } from './components/tiposuscripcion/tiposuscripcion-creaedita/tiposuscripcion-creaedita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BebeComponent } from './components/bebe/bebe.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { ServicioCreaditaComponent } from './components/servicio/servicio-creadita/servicio-creadita.component';
import { BebeCreaeditaComponent } from './components/bebe/bebe-creaedita/bebe-creaedita.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ServicioDialogoComponent } from './components/servicio/servicio-listar/servicio-dialogo/servicio-dialogo.component'
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { GuarderiaDialogoComponent } from './components/guarderia/guarderia-listar/guarderia-dialogo/guarderia-dialogo.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ControlvacunacionListarComponent } from './components/controlvacunacion/controlvacunacion-listar/controlvacunacion-listar.component';
import { ControlvacunacionComponent } from './components/controlvacunacion/controlvacunacion.component';
import { ControlvacunacionCreaeditaComponent } from './components/controlvacunacion/controlvacunacion-creaedita/controlvacunacion-creaedita.component';
import { ControlvacunacionDialogoComponent } from './components/controlvacunacion/controlvacunacion-listar/controlvacunacion-dialogo/controlvacunacion-dialogo.component';
import { GuarderiaservicioComponent } from './components/guarderiaservicio/guarderiaservicio.component';
import { GuarderiaservicioListarComponent } from './components/guarderiaservicio/guarderiaservicio-listar/guarderiaservicio-listar.component';
import { BebevacunaComponent } from './components/bebevacuna/bebevacuna.component';
import { BebevacunaListarComponent } from './components/bebevacuna/bebevacuna-listar/bebevacuna-listar.component'
import { CompraComponent } from './components/compra/compra.component';
import { EnfermedadbebeDialogoComponent } from './components/enfermedadbebe/enfermedadbebe-listar/enfermedadbebe-dialogo/enfermedadbebe-dialogo.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { GuarderiaComponent } from './components/guarderia/guarderia.component';
import { ServicioListarComponent } from './components/servicio/servicio-listar/servicio-listar.component'
import { GuarderiaCreaeditaComponent } from './components/guarderia/guarderia-creaedita/guarderia-creaedita.component';
import { TipoenfermedadComponent } from './components/tipoenfermedad/tipoenfermedad.component';
import { TipoenfermedadListarComponent } from './components/tipoenfermedad/tipoenfermedad-listar/tipoenfermedad-listar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TipocomprobanteDialogoComponent } from './components/tipocomprobante/tipocomprobante-listar/tipocomprobante-dialogo/tipocomprobante-dialogo.component';
import { GuarderiaListarComponent } from './components/guarderia/guarderia-listar/guarderia-listar.component';
import { TipoenfermedadCreareditarComponent } from './components/tipoenfermedad/tipoenfermedad-creareditar/tipoenfermedad-creareditar.component';
import { TipoenfermedadDialogoComponent } from './components/tipoenfermedad/tipoenfermedad-listar/tipoenfermedad-dialogo/tipoenfermedad-dialogo.component';
import { UsuarioDialogoComponent } from './components/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { CompraListarComponent } from './components/compra/compra-listar/compra-listar.component';
import { EnfermedadbebeComponent } from './components/enfermedadbebe/enfermedadbebe.component';
import { EnfermedadbebeListarComponent } from './components/enfermedadbebe/enfermedadbebe-listar/enfermedadbebe-listar.component';
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
import { ApoderadoComponent } from './components/apoderado/apoderado.component';

import { ApoderadoDialogoComponent } from './components/apoderado/apoderado-listar/apoderado-dialogo/apoderado-dialogo.component';


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
    GuarderiaDialogoComponent,
    TipoenfermedadListarComponent,
    TipocomprobanteDialogoComponent,
    TipoenfermedadCreareditarComponent,
    EnfermedadbebeCreaeditaComponent,
    TipoenfermedadDialogoComponent,
    ApoderadoListarComponent,
    GuarderiaCreaeditaComponent,
    EnfermedadbebeListarComponent,
    EnfermedadbebeDialogoComponent,
    UsuarioDialogoComponent,
    BebeCreaeditaComponent,
    ProductoComponent,
    ProductoListarComponent,
    ApoderadoCreaeditarComponent,
    ProductoCreaeditaComponent,
    ProductoDialogoComponent,
    ServicioListarComponent,
    TipocomprobanteCreaeditaComponent,
    ServicioCreaditaComponent,
    ServicioDialogoComponent,
    EnfermedadbebeComponent,
    GuarderiaComponent,
    TiposuscripcionComponent,
    TiposuscripcionListarComponent,
    TiposuscripcionCreaeditaComponent,
    BebeListarComponent,

    TiposuscripcionDialogoComponent,
    GuarderiaListarComponent,
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
    BebeComponent,
    ControlvacunacionListarComponent,
    ControlvacunacionComponent,
    ControlvacunacionCreaeditaComponent,
    ControlvacunacionDialogoComponent,
    GuarderiaservicioComponent,
    GuarderiaservicioListarComponent,
    BebevacunaComponent,
    BebevacunaListarComponent,
    CompraListarComponent,
    CompraComponent,
    ApoderadoComponent,
    ApoderadoDialogoComponent

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
    MatDatepickerModule,
    BrowserModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,

    MatPaginatorIntl,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
