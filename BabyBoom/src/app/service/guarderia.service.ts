import { Guarderia } from './../model/Guarderia';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GuarderiaSideDTO } from '../model/guarderiaSideDTO';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Guarderia[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(guarderia: Guarderia) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, guarderia,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: Guarderia[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(guarderia: Guarderia) {
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url + "/" + pet.idPet, pet);
    return this.http.put(this.url+"/", guarderia,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  listarId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Guarderia>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });

  }
  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  getSideCountByGuarderia(): Observable<GuarderiaSideDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<GuarderiaSideDTO[]>(`${this.url}/guarderia-count`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
