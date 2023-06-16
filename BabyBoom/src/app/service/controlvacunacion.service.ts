import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
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
  return this.http.get<ControlVacunacion[]>(this.url);
}
insert(controlvacunacion: ControlVacunacion) {
  return this.http.post(this.url, controlvacunacion);
}
setList(listaNueva: ControlVacunacion[]) {
  this.listaCambio.next(listaNueva);
}
getLista() {
  return this.listaCambio.asObservable();
}
modificar(controlvacunacion: ControlVacunacion) {
  return this.http.put(this.url + "/" + controlvacunacion.id, controlvacunacion);
}
listarId(id: number) {
  return this.http.get<ControlVacunacion>(`${this.url}/${id}`);
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
