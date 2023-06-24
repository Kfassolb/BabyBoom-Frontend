import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Medico } from '../model/medico';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Medico[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  insert(usuario:Medico){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, usuario,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  setList(listaNueva:Medico[]){
    return this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Medico>(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  update(usuario:Medico){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url + "/" + usuario.idUser, usuario);
    return this.http.put(this.url, usuario,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })}
  delete(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })}
  getConfirmDeletion(){
    return this.confirmDeletion.asObservable();
  }
  setConfirmDeletion(estado:boolean){
    return this.confirmDeletion.next(estado);
  }
}
