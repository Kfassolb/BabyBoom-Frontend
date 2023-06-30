import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { GuarderiaServicio } from '../model/GuarderiaServicio';

const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class GuarderiaservicioService {
private url=`${base_url}/guarderiaservicios`
private listaCambio=new Subject<GuarderiaServicio[]>()

constructor(private http:HttpClient) { }

list() {
  let token = sessionStorage.getItem("token");
  return this.http.get<GuarderiaServicio[]>(this.url,{
  headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
})
}
setList(listaNueva: GuarderiaServicio[]) {
  this.listaCambio.next(listaNueva);
}
getLista() {
  return this.listaCambio.asObservable();
}
insert(citamedica:GuarderiaServicio){
  let token = sessionStorage.getItem("token");
  return this.http.post(this.url, citamedica,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}
}
