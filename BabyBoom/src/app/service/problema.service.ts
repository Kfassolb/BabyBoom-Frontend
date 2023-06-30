import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Problema } from '../model/Problema';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ProblemaService {

  private url = `${base_url}/problema`
  private listaCambio = new Subject<Problema[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Problema[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  insert(problema: Problema) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, problema,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  setList(listaNueva: Problema[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Problema>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }
  update(problema:Problema){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url + "/" + usuario.idUser, usuario);
    return this.http.put(this.url, problema,{
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
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmDeletion(estado:boolean){
    return this.confirmaEliminacion.next(estado);
  }
}
