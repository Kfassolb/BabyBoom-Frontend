import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Problema } from '../model/Problema';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ProblemaService {
  private url = `${base_url}/problema`
  private listCambio = new Subject<Problema[]>();
  private confirmarEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Problema[]>(this.url);
  }

  insert(producto:Problema){
    return this.http.post(this.url,producto);
  }
  setList(listanueva:Problema[]){
    this.listCambio.next(listanueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Problema>(`${this.url}/${id}`);
  }
  update(problema:Problema){
    return this.http.put(this.url+"/"+problema.apoderado,problema);
  }
  }
