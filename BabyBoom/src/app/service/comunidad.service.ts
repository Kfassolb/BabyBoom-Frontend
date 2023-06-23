import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comunidad } from '../model/Comunidad';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ComunidadService {
  private url=`${base_url}/comunidades`
  private listaCambio=new Subject<Comunidad[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Comunidad[]>(this.url);
  }
  insert(comunidad: Comunidad) {
    return this.http.post(this.url, comunidad);
  }
  setList(listaNueva: Comunidad[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(comunidad: Comunidad) {
    return this.http.put(this.url + "/" + comunidad.idComunidad, comunidad);
  }
  listarId(id: number) {
    return this.http.get<Comunidad>(`${this.url}/${id}`);
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
