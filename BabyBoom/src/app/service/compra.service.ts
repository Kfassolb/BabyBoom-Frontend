import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Compra } from '../model/Compra';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private url = `${base_url}/compras`
  private listaCambio = new Subject<Compra[]>()
  constructor(private http:HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Compra[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}
listId(id:number){
  let token = sessionStorage.getItem("token");
  return this.http.get<Compra>(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  })
}
  insert(compra: Compra) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, compra,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}
  setList(listaNueva: Compra[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
