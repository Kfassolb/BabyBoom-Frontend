import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Citamedica } from '../model/Citamedica';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class CitamedicaService {

  private url = `${base_url}/citamedicas`;
  private listCambio = new Subject<Citamedica[]>();
  private confirmDeletion = new Subject<Boolean>();

  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Citamedica[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(citamedica:Citamedica){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, citamedica,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Citamedica[]){
    return this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Citamedica>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }
  update(citamedica:Citamedica){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url + "/" + usuario.idUser, usuario);
    return this.http.put(this.url, citamedica,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  delete(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getConfirmDeletion(){
    return this.confirmDeletion.asObservable();
  }
  setConfirmDeletion(estado:boolean){
    return this.confirmDeletion.next(estado);
  }
}
