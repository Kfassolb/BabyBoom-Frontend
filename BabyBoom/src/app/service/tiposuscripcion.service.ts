import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Tiposuscripcion } from '../model/Tiposuscripcion';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class TiposuscripcionService{
  private url = `${base_url}/tiposuscrips`;
  private listCambio = new Subject<Tiposuscripcion[]>();
  private confirmarEliminacion =new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Tiposuscripcion[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(tipoSuscripcion:Tiposuscripcion) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, tipoSuscripcion,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: Tiposuscripcion[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Tiposuscripcion>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(tipoSuscripcion: Tiposuscripcion) {
    let token = sessionStorage.getItem("token");
    // return this.http.put(this.url + '/' + tipoSuscripcion.id, tipoSuscripcion);
    return this.http.put(this.url, tipoSuscripcion,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }
  eliminar(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getConfirmarEliminar(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmarEliminacion(estado: Boolean){
    this.confirmarEliminacion.next(estado);
  }
}

