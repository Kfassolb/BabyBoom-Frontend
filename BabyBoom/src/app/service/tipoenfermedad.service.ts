import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tipoenfermedad } from '../model/Tipoenfermedad';
import { Observable, Subject } from 'rxjs';
import { ReporteEnfermedad } from '../model/reporteenfermedad';
import { ReporteEnfermedadBebe } from '../model/reporteenfermedadbebe';

const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class TipoEnfermedadeService {
  private url = `${base_url}/tipoenfermedads`;
  private listCambio = new Subject<Tipoenfermedad[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Tipoenfermedad[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  insert(Tipoenfermedad: Tipoenfermedad) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, Tipoenfermedad,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}

  setList(listaNueva: Tipoenfermedad[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Tipoenfermedad>(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  update(Tipoenfermedad: Tipoenfermedad) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url + '/', Tipoenfermedad,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}

  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  getEnefermedadbyTipo():Observable<ReporteEnfermedad[]>{
    let token = sessionStorage.getItem("token");
    return this.http.get<ReporteEnfermedad[]>(`${this.url}/buscarTipo`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getBebebyNombreEnfermedad():Observable<ReporteEnfermedadBebe[]>{
    let token = sessionStorage.getItem("token");
    return this.http.get<ReporteEnfermedadBebe[]>(`${this.url}/bebes/{nombreTipoEnfermedad}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
