import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../model/Producto';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = `${base_url}/productos`
  private listCambio = new Subject<Producto[]>();
  private confirmarEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Producto[]>(this.url);
  }

  insert(producto:Producto){
    return this.http.post(this.url,producto);
  }
  setList(listanueva:Producto[]){
    this.listCambio.next(listanueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Producto>(`${this.url}/${id}`);
  }
  update(producto:Producto){
    return this.http.put(this.url+"/"+producto.id,producto);
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
