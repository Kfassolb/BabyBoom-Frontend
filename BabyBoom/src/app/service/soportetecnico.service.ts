import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Soportetecnico } from '../model/Soportetecnico';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class SoportetecnicoService {
  private url=`${base_url}/soportetecnico`
  private listaCambio=new Subject<Soportetecnico[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Soportetecnico[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  insert(soportetecnico: Soportetecnico) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, soportetecnico,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }
  setList(listaNueva: Soportetecnico[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(soportetecnico: Soportetecnico) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url + "/", soportetecnico,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })}
  listarId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Soportetecnico>(`${this.url}/${id}`,{
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
