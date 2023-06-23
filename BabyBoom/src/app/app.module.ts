import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { TipocomprobanteComponent } from './components/tipocomprobante/tipocomprobante.component';
// import { TipocomprobanteListarComponent } from './components/tipocomprobante/tipocomprobante-listar/tipocomprobante-listar.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import {MatTableModule} from '@angular/material/table';
// import { UsuarioComponent } from './components/usuario/usuario.component';

// import { UsuarioCreaeditaComponent } from './components/usuario/usuario-creaedita/usuario-creaedita.component';
// import { TipocomprobanteCreaeditaComponent } from './components/tipocomprobante/tipocomprobante-creaedita/tipocomprobante-creaedita.component'
// import { ServicioCreaditaComponent } from './components/servicio/servicio-creadita/servicio-creadita.component';
// import { UsuarioListarComponent } from './components/usuario/usuario-listar/usuario-listar.component';
// import { TiposuscripcionComponent } from './components/tiposuscripcion/tiposuscripcion.component';
// import { TiposuscripcionListarComponent } from './components/tiposuscripcion/tiposuscripcion-listar/tiposuscripcion-listar.component';
// import { TiposuscripcionCreaeditaComponent } from './components/tiposuscripcion/tiposuscripcion-creaedita/tiposuscripcion-creaedita.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatNativeDateModule } from '@angular/material/core';
// import{MatInputModule} from '@angular/material/input'
// import{MatSelectModule} from '@angular/material/select'
// import { MatFormFieldModule } from '@angular/material/form-field';


// import { ServicioComponent } from './components/servicio/servicio.component';
// import { ServicioDialogoComponent } from './components/servicio/servicio-listar/servicio-dialogo/servicio-dialogo.component'

// import { ServicioListarComponent } from './components/servicio/servicio-listar/servicio-listar.component'
// import { MatIconModule } from '@angular/material/icon';
// import { TipoenfermedadComponent } from './components/tipoenfermedad/tipoenfermedad.component';
// import { TipoenfermedadListarComponent } from './components/tipoenfermedad/tipoenfermedad-listar/tipoenfermedad-listar.component';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { TipocomprobanteDialogoComponent } from './components/tipocomprobante/tipocomprobante-listar/tipocomprobante-dialogo/tipocomprobante-dialogo.component';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatButtonModule } from '@angular/material/button';
// import { TipoenfermedadCreareditarComponent } from './components/tipoenfermedad/tipoenfermedad-creareditar/tipoenfermedad-creareditar.component';
// import { TipoenfermedadDialogoComponent } from './components/tipoenfermedad/tipoenfermedad-listar/tipoenfermedad-dialogo/tipoenfermedad-dialogo.component';
// import { UsuarioDialogoComponent } from './components/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatPaginatorModule } from '@angular/material/paginator';

// import { ProductoComponent } from './components/producto/producto.component';
// import { ProductoListarComponent } from './components/producto/producto-listar/producto-listar.component';
// import { ProductoCreaeditaComponent } from './components/producto/producto-creaedita/producto-creaedita.component';
// import { ProductoDialogoComponent } from './components/producto/producto-listar/producto-dialogo/producto-dialogo.component';
// import { TiposuscripcionDialogoComponent } from './components/tiposuscripcion/tiposuscripcion-listar/tiposuscripcion-dialogo/tiposuscripcion-dialogo.component';
// import { MedicoComponent } from './components/medico/medico.component';
// import { MedicoCreaeditaComponent } from './components/medico/medico-creaedita/medico-creaedita.component';
// import { MedicoListarComponent } from './components/medico/medico-listar/medico-listar.component';
// import { MedicoDialogoComponent } from './components/medico/medico-listar/medico-dialogo/medico-dialogo.component';
// import { ApoderadoComponent } from './components/apoderado/apoderado.component';
// import { ApoderadoCreaeditaComponent } from './components/apoderado/apoderado-creaedita/apoderado-creaedita.component';
// import { ApoderadoListarComponent } from './components/apoderado/apoderado-listar/apoderado-listar.component';
// import { ApoderadoDialogoComponent } from './components/apoderado/apoderado-listar/apoderado-dialogo/apoderado-dialogo.component';

// import { BebeComponent } from './components/bebe/bebe.component';
// import { BebeListarComponent } from './components/bebe/bebe-listar/bebe-listar.component';
// import { BebeDialogoComponent } from './components/bebe/bebe-listar/bebe-dialogo/bebe-dialogo.component';
// import { BebeCreaeditaComponent } from './components/bebe/bebe-creaedita/bebe-creaedita.component';
// import { EnfermedadbebeComponent } from './components/enfermedadbebe/enfermedadbebe.component';
// import { EnfermedadbebeCreaeditaComponent } from './components/enfermedadbebe/enfermedadbebe-creaedita/enfermedadbebe-creaedita.component';
// import { EnfermedadbebeListarComponent } from './components/enfermedadbebe/enfermedadbebe-listar/enfermedadbebe-listar.component';
// import { EnfermedadbebeDialogoComponent } from './components/enfermedadbebe/enfermedadbebe-listar/enfermedadbebe-dialogo/enfermedadbebe-dialogo.component';
// import { LoginComponent } from './components/login/login.component';
// import { CompraComponent } from './components/compra/compra.component';
// import { CompraListarComponent } from './components/compra/compra-listar/compra-listar.component';
// import { CompraCreaeditaComponent } from './components/compra/compra-creaedita/compra-creaedita.component';
// import { GuarderiaComponent } from './components/guarderia/guarderia.component';
// import { GuarderiaListarComponent } from './components/guarderia/guarderia-listar/guarderia-listar.component';
// import { GuarderiaCreaeditaComponent } from './components/guarderia/guarderia-creaedita/guarderia-creaedita.component';
// import { GuarderiaDialogoComponent } from './components/guarderia/guarderia-listar/guarderia-dialogo/guarderia-dialogo.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     TipocomprobanteComponent,
//     TipocomprobanteListarComponent,
//     UsuarioListarComponent,
//     UsuarioComponent,
//     UsuarioCreaeditaComponent,
//     ServicioComponent,
//     ServicioListarComponent,
//     TipocomprobanteCreaeditaComponent,
//     TipoenfermedadComponent,
//     TipoenfermedadListarComponent,
//     TipocomprobanteDialogoComponent,
//     TipoenfermedadCreareditarComponent,
//     TipoenfermedadDialogoComponent,
//     UsuarioDialogoComponent,
//     ProductoComponent,
//     ProductoListarComponent,
//     ProductoCreaeditaComponent,
//     ProductoDialogoComponent,
//     ServicioListarComponent,
//     TipocomprobanteCreaeditaComponent,
//     ServicioCreaditaComponent,
//     ServicioDialogoComponent,
//     TiposuscripcionComponent,
//     TiposuscripcionListarComponent,
//     TiposuscripcionCreaeditaComponent,
//     TiposuscripcionDialogoComponent,
//     TipocomprobanteDialogoComponent,
//     MedicoComponent,
//     MedicoCreaeditaComponent,
//     MedicoListarComponent,
//     MedicoDialogoComponent,
//     BebeComponent,
//     BebeListarComponent,
//     BebeCreaeditaComponent,
//     BebeDialogoComponent,
//     LoginComponent,
//     EnfermedadbebeComponent,
//     EnfermedadbebeCreaeditaComponent,
//     EnfermedadbebeListarComponent,
//     EnfermedadbebeDialogoComponent,
//     CompraComponent,
//     CompraListarComponent,
//     CompraCreaeditaComponent,
//     GuarderiaComponent,
//     GuarderiaListarComponent,
//     GuarderiaCreaeditaComponent,
//     GuarderiaDialogoComponent,
//     ApoderadoComponent,
//     ApoderadoCreaeditaComponent,
//     ApoderadoListarComponent,
//     ApoderadoDialogoComponent

//   ],
//   imports: [
//     AppRoutingModule,
//     HttpClientModule,
//     MatTableModule,
//     ReactiveFormsModule,
//     MatNativeDateModule,
//     FormsModule,
//     MatInputModule,
//     MatSelectModule,
//     MatDatepickerModule,
//     MatButtonModule,
//     BrowserAnimationsModule,
//     MatIconModule,
//     MatSlideToggleModule,
//     MatDialogModule,
//     MatPaginatorModule,
//     BrowserModule,
//     MatFormFieldModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

