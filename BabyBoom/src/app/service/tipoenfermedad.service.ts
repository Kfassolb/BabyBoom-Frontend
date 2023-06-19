import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tipoenfermedad } from '../model/Tipoenfermedad';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class TipoEnfermedadeService {
  private url = `${base_url}/tiposenfermedades`;
  private listCambio = new Subject<Tipoenfermedad[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Tipoenfermedad[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(Tipoenfermedad: Tipoenfermedad) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, Tipoenfermedad,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: Tipoenfermedad[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Tipoenfermedad>(`${this.url}/${id}`);
  }
  update(Tipoenfermedad: Tipoenfermedad) {
    return this.http.put(this.url + '/' + Tipoenfermedad.idTipoEnfermedad, Tipoenfermedad);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
