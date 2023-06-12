import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Medico } from '../model/medico';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private url = `${base_url}/medicos`;
  private listCambio = new Subject<Medico[]>();
  private confirmDeletion = new Subject<Boolean>();

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Medico[]>(this.url);
  }
  insert(usuario:Medico){
    return this.http.post(this.url, usuario);
  }
  setList(listaNueva:Medico[]){
    return this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Medico>(`${this.url}/${id}`)
  }
  update(usuario:Medico){
    //return this.http.put(this.url + "/" + usuario.idUser, usuario);
    return this.http.put(this.url, usuario);
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDeletion(){
    return this.confirmDeletion.asObservable();
  }
  setConfirmDeletion(estado:boolean){
    return this.confirmDeletion.next(estado);
  }
}
