import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Tipocomprobante[]>(this.url);
  }

  insert(tipocomprobante:Tipocomprobante){
    return this.http.post(this.url,tipocomprobante);
  }
  setList(listanueva:Tipocomprobante[]){
    this.listCambio.next(listanueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Tipocomprobante>(`${this.url}/${id}`);
  }
  update(tipocomprobante:Tipocomprobante){
    return this.http.put(this.url+"/"+tipocomprobante.id,tipocomprobante);
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
