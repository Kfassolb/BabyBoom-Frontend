import { Guarderia } from './../model/Guarderia';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class GuarderiaService {

  private url = `${base_url}/guarderias`
  private listaCambio = new Subject<Guarderia[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Guarderia[]>(this.url);
  }
  insert(guarderia: Guarderia) {
    return this.http.post(this.url, guarderia);
  }
  setList(listaNueva: Guarderia[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(guarderia: Guarderia) {
    //return this.http.put(this.url + "/" + pet.idPet, pet);
    return this.http.put(this.url, guarderia);
  }
  listarId(id: number) {
    return this.http.get<Guarderia>(`${this.url}/${id}`);

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
