import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../model/Producto';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = `${base_url}/producto`
  private listCambio = new Subject<Producto[]>();
  private confirmarEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Producto[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}

  insert(producto:Producto){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,producto,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  setList(listanueva:Producto[]){
    this.listCambio.next(listanueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Producto>(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  update(producto:Producto){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url+"/",producto,{
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
