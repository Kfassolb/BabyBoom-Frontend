import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Apoderado } from '../model/apoderado';
import { Subject } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<Apoderado[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(apoderado:Apoderado){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, apoderado,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Apoderado[]){
    return this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Apoderado>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }
  update(apoderado:Apoderado){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url + "/" + usuario.idUser, usuario);
    return this.http.put(this.url, apoderado,{
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
