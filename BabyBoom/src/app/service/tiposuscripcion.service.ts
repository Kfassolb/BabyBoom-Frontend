import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tiposuscripcion } from '../model/Tiposuscripcion';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class TiposuscripcionService{
  private url = `${base_url}/TiposSuscripcion`;
  private listCambio = new Subject<Tiposuscripcion[]>();
  private confirmarEliminacion =new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Tiposuscripcion[]>(this.url);
  }
  insert(tipoSuscripcion:Tiposuscripcion) {
    return this.http.post(this.url, tipoSuscripcion);
  }

  setList(listaNueva: Tiposuscripcion[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Tiposuscripcion>(`${this.url}/${id}`);
  }
  update(tipoSuscripcion: Tiposuscripcion) {
    return this.http.put(this.url + '/' + tipoSuscripcion.id, tipoSuscripcion);
  }
  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmarEliminar(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmarEliminacion(estado: Boolean){
    this.confirmarEliminacion.next(estado);
  }
}

