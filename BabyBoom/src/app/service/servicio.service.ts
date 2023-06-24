import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Servicio } from '../model/Servicio';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class ServicioService {
private url=`${base_url}/servicios`
private listaCambio=new Subject<Servicio[]>()
private confirmaEliminacion = new Subject<Boolean>()

constructor(private http:HttpClient) { }

list() {
  let token = sessionStorage.getItem("token");
  return this.http.get<Servicio[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
insert(servicio: Servicio) {
  let token = sessionStorage.getItem("token");
  return this.http.post(this.url, servicio,{
  headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
})
}
setList(listaNueva: Servicio[]) {
  this.listaCambio.next(listaNueva);
}
getLista() {
  return this.listaCambio.asObservable();
}
modificar(servicio: Servicio) {
  let token = sessionStorage.getItem("token");
  return this.http.put(this.url + "/" + servicio.idServicio, servicio,{
  headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
listarId(id: number) {
  let token = sessionStorage.getItem("token");
  return this.http.get<Servicio>(`${this.url}/${id}`,{
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
