import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Apoderado } from '../model/Apoderado';
import { environment } from 'src/environments/environment';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ApoderadoService {
  private url = `${base_url}/apoderados`;
  private listCambio = new Subject<Apoderado[]>();
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Apoderado[]>(this.url);
  }
  insert(apoderado: Apoderado) {
    return this.http.post(this.url, apoderado);
  }

  setList(listaNueva: Apoderado[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Apoderado>(`${this.url}/${id}`);
  }
  update(apoderado: Apoderado) {
    return this.http.put(this.url + '/' + apoderado.idApoderado, Apoderado);
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
