import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Apoderado } from '../model/apoderado';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ApoderadoService {
  private url = `${base_url}/apoderados`;
  private listCambio = new Subject<Apoderado[]>();
  private confirmDeletion = new Subject<Boolean>();

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Apoderado[]>(this.url);
  }
  insert(apoderado:Apoderado){
    return this.http.post(this.url, apoderado);
  }
  setList(listaNueva:Apoderado[]){
    return this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<Apoderado>(`${this.url}/${id}`)
  }
  update(apoderado:Apoderado){
    //return this.http.put(this.url + "/" + usuario.idUser, usuario);
    return this.http.put(this.url, apoderado);
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
