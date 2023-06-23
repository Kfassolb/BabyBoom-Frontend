import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Publicacion } from '../model/Publicacion';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private url = `${base_url}/publicaciones`
  private listCambio = new Subject<Publicacion[]>();
  private confirmarEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Publicacion[]>(this.url);
  }

  insert(publicacion:Publicacion){
    return this.http.post(this.url,publicacion);
  }
  setList(listanueva:Publicacion[]){
    this.listCambio.next(listanueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Publicacion>(`${this.url}/${id}`);
  }
  update(publicacion:Publicacion){
    return this.http.put(this.url+"/"+publicacion.idPublicacion,publicacion);
  }
  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmarEliminar(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmarEliminacion(estado: Boolean){
    this.confirmarEliminacion.next(estado);
  }
}

