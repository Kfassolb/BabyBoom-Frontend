import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comunidad } from '../model/Comunidad';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Comunidad[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
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
}
