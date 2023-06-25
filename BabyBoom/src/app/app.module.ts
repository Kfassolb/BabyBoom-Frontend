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
import { MatFormFieldModule } from '@angular/material/form-field';


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
import { BebeComponent } from './components/bebe/bebe.component';
import { BebeListarComponent } from './components/bebe/bebe-listar/bebe-listar.component';
import { BebeDialogoComponent } from './components/bebe/bebe-listar/bebe-dialogo/bebe-dialogo.component';
import { BebeCreaeditaComponent } from './components/bebe/bebe-creaedita/bebe-creaedita.component';
import { EnfermedadbebeComponent } from './components/enfermedadbebe/enfermedadbebe.component';
import { EnfermedadbebeCreaeditaComponent } from './components/enfermedadbebe/enfermedadbebe-creaedita/enfermedadbebe-creaedita.component';
import { EnfermedadbebeListarComponent } from './components/enfermedadbebe/enfermedadbebe-listar/enfermedadbebe-listar.component';
import { EnfermedadbebeDialogoComponent } from './components/enfermedadbebe/enfermedadbebe-listar/enfermedadbebe-dialogo/enfermedadbebe-dialogo.component';
import { LoginComponent } from './components/login/login.component';
import { ReportesComponent } from './componentss/reportes/reportes.component';
import { ReporteEnfermedadComponent } from './components/reportes/reporte-enfermedad/reporte-enfermedad.component';
import { ReporteenfermedadbebesComponent } from './components/reportes/reporteenfermedadbebes/reporteenfermedadbebes.component';
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
    ServicioListarComponent,
    TipocomprobanteCreaeditaComponent,
    ServicioCreaditaComponent,
    ServicioDialogoComponent,
    TiposuscripcionComponent,
    TiposuscripcionListarComponent,
    TiposuscripcionCreaeditaComponent,
    BebeComponent,
    BebeListarComponent,
    BebeCreaeditaComponent,
    BebeDialogoComponent,
    LoginComponent,
    EnfermedadbebeComponent,
    EnfermedadbebeCreaeditaComponent,
    EnfermedadbebeListarComponent,
    EnfermedadbebeDialogoComponent,
    ReportesComponent,
    ReporteEnfermedadComponent,
    ReporteenfermedadbebesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
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
    MatFormFieldModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
