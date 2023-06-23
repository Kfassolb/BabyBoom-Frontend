import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Enfermedadbebe } from '../model/Enfermedadbebe';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class EnfermedadbebeService {
  private url = `${base_url}/enfermedades_bebes`;
  private listCambio = new Subject<Enfermedadbebe[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Enfermedadbebe[]>(this.url);
  }
  insert(Bebe: Enfermedadbebe) {
    return this.http.post(this.url, Bebe);
  }

  setList(listaNueva: Enfermedadbebe[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Enfermedadbebe>(`${this.url}/${id}`);
  }
  update(Bebe: Enfermedadbebe) {
    return this.http.put(this.url + '/' + Bebe.id, Bebe);
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
