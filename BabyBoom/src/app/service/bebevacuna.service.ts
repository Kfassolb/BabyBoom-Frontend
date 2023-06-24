import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { BebeVacuna } from '../model/BebeVacuna';

const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class BebevacunaService {
  private url=`${base_url}/bebevacunas`
  private listaCambio=new Subject<BebeVacuna[]>()

constructor(private http:HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<BebeVacuna[]>(this.url,
      {headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')});
  }

  setList(listaNueva: BebeVacuna[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  insert(bebevacuna: BebeVacuna) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, bebevacuna,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
