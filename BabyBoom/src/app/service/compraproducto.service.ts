import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Compraproducto } from '../model/Compraproducto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url =environment.base;
@Injectable({
  providedIn: 'root'
})
export class CompraproductoService {
  private url = `${base_url}/compraproductos`;
  private listCambio = new Subject<Compraproducto[]>();
  private confirmDeletion = new Subject<Boolean>();
  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Compraproducto[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(compraproducto:Compraproducto){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, compraproducto,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Compraproducto[]){
    return this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
}
