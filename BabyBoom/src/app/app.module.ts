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
import { UsuarioListarComponent } from './components/usuario/usuario-listar/usuario-listar.component';
import { ServicioListarComponent } from './components/servicio/servicio-listar/servicio-listar.component';
import { TipocomprobanteCreaeditaComponent } from './components/tipocomprobante/tipocomprobante-creaedita/tipocomprobante-creaedita.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { ServicioCreaditaComponent } from './components/servicio/servicio-creadita/servicio-creadita.component';
import { ServicioCompoment } from './components/servicio/servicio.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ServicioDialogoComponent } from './components/servicio/servicio-listar/servicio-dialogo/servicio-dialogo.component'
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [
    AppComponent,
    TipocomprobanteComponent,
    TipocomprobanteListarComponent,
    UsuarioListarComponent,
    UsuarioComponent,
    ServicioListarComponent,
    TipocomprobanteCreaeditaComponent,
    ServicioCreaditaComponent,
    ServicioCompoment,
    ServicioDialogoComponent,
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
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
