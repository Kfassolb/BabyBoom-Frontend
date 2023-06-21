import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Soportetecnico } from '../model/Soportetecnico';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class SoportetecnicoService {
  private url=`${base_url}/soportetecnicos`
  private listaCambio=new Subject<Soportetecnico[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Soportetecnico[]>(this.url);
  }
  insert(soportetecnico: Soportetecnico) {
    return this.http.post(this.url, soportetecnico);
  }
  setList(listaNueva: Soportetecnico[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(soportetecnico: Soportetecnico) {
    return this.http.put(this.url + "/" + soportetecnico.idSoporte, soportetecnico);
  }
  listarId(id: number) {
    return this.http.get<Soportetecnico>(`${this.url}/${id}`);
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
