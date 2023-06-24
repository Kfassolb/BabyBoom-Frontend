import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tipocomprobante } from '../model/TipoComprobante';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TipocomprobanteService {
  private url = `${base_url}/tipocomprobantes`
  private listCambio = new Subject<Tipocomprobante[]>();
  private confirmarEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Tipocomprobante[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}

  insert(tipocomprobante:Tipocomprobante){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,tipocomprobante,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  setList(listanueva:Tipocomprobante[]){
    this.listCambio.next(listanueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Tipocomprobante>(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  update(tipocomprobante:Tipocomprobante){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url+"/"+tipocomprobante.idTipocomprobante,tipocomprobante,{
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
