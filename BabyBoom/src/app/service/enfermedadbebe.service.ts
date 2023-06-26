import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enfermedadbebe } from '../model/Enfermedadbebe';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class EnfermedadbebeService {
  private url = `${base_url}/enfermedad-bebes`;
  private listCambio = new Subject<Enfermedadbebe[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Enfermedadbebe[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  insert(Bebe: Enfermedadbebe) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, Bebe,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }

  setList(listaNueva: Enfermedadbebe[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Enfermedadbebe>(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })}
  update(Bebe: Enfermedadbebe) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url + '/' + Bebe.id, Bebe,{
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
