import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comunidad } from '../model/Comunidad';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {
  private url = `${base_url}/Comunidad`;
  private listCambio = new Subject<Comunidad[]>();
  private confirmarEliminacion =new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Comunidad[]>(this.url);
  }
  insert(comunidad:Comunidad) {
    return this.http.post(this.url,comunidad);
  }

  setList(listaNueva: Comunidad[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }
  listId(idComunidad: number) {
    return this.http.get<Comunidad>(`${this.url}/${idComunidad}`);
  }
  update(comunidad: Comunidad) {
    return this.http.put(this.url + '/' + comunidad.idComunidad, comunidad);
  }
  eliminar(idComunidad:number){
    return this.http.delete(`${this.url}/${idComunidad}`);
  }
  getConfirmarEliminar(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmarEliminacion(estado: Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
