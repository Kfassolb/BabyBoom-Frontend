import { Injectable } from '@angular/core';
import { Publicacion } from '../model/Publicacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PublicacionComunidadDTO } from '../model/PublicacionComunidadDTO';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private url = `${base_url}/publicaciones`;
  private listCambio = new Subject<Publicacion[]>();
  private confirmarEliminacion =new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Publicacion[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(publicacion:Publicacion) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,publicacion,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: Publicacion[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }
  getcomunidadCountBytitulo(): Observable<PublicacionComunidadDTO[]> {
    return this.http.get<PublicacionComunidadDTO[]>(`${this.url}/public-count`);

  }

}
