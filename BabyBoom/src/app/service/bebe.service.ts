import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Bebe } from '../model/Bebe';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class BebeService {
  private url = `${base_url}/bebes`;
  private listCambio = new Subject<Bebe[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Bebe[]>(this.url);
  }
  insert(Bebe: Bebe) {
    return this.http.post(this.url, Bebe);
  }

  setList(listaNueva: Bebe[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Bebe>(`${this.url}/${id}`);
  }
  update(Bebe: Bebe) {
    return this.http.put(this.url + '/' + Bebe.idBebe, Bebe);
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
