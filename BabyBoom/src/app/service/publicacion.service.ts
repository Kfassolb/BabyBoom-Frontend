import { Injectable } from '@angular/core';
import { Publicacion } from '../model/Publicacion';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private url = `${base_url}/Publicacion`;
  private listCambio = new Subject<Publicacion[]>();
  private confirmarEliminacion =new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Publicacion[]>(this.url);
  }
  insert(publicacion:Publicacion) {
    return this.http.post(this.url,publicacion);
  }

  setList(listaNueva: Publicacion[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

}
