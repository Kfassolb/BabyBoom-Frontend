import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Soportetecnico } from '../model/Soportetecnico';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class SoportetecnicoService {
  private url = `${base_url}/problema`
  private listCambio = new Subject<Soportetecnico[]>();
  private confirmarEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Soportetecnico[]>(this.url);
  }

  insert(producto:Soportetecnico){
    return this.http.post(this.url,producto);
  }
  setList(listanueva:Soportetecnico[]){
    this.listCambio.next(listanueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Soportetecnico>(`${this.url}/${id}`);
  }
  update(soportetecnico:Soportetecnico){
    return this.http.put(this.url+"/"+soportetecnico.idSoporte, soportetecnico);
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

