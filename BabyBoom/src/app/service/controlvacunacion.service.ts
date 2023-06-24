import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { ControlVacunacion } from '../model/ControlVacunacion';
const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class ControlvacunacionService {
private url=`${base_url}/controlvacunacion`
private listaCambio=new Subject<ControlVacunacion[]>()
private confirmaEliminacion = new Subject<Boolean>()
constructor(private http:HttpClient) { }
list() {
  let token = sessionStorage.getItem("token");
  return this.http.get<ControlVacunacion[]>(this.url,{
  headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
})
}
insert(controlvacunacion: ControlVacunacion) {
  let token = sessionStorage.getItem("token");
  return this.http.post(this.url, controlvacunacion,{
  headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
})
}
setList(listaNueva: ControlVacunacion[]) {
  this.listaCambio.next(listaNueva);
}
getLista() {
  return this.listaCambio.asObservable();
}
modificar(controlvacunacion: ControlVacunacion) {
  let token = sessionStorage.getItem("token");
  return this.http.put(this.url + "/" + controlvacunacion.id, controlvacunacion,{
  headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
})
}
listarId(id: number) {
  let token = sessionStorage.getItem("token");
  return this.http.get<ControlVacunacion>(`${this.url}/${id}`,{
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
}
