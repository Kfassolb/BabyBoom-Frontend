import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Publicacion[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}

  insert(publicacion:Publicacion){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,publicacion,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  setList(listanueva:Publicacion[]){
    this.listCambio.next(listanueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Publicacion>(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}

  update(publicacion:Publicacion){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url+"/"+publicacion.idPublicacion,publicacion,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  eliminar(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  getConfirmarEliminar(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmarEliminacion(estado: Boolean){
    this.confirmarEliminacion.next(estado);
  }
}

