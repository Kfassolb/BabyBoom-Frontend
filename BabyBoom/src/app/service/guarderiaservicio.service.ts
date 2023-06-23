import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
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
  return this.http.get<GuarderiaServicio[]>(this.url);
}
setList(listaNueva: GuarderiaServicio[]) {
  this.listaCambio.next(listaNueva);
}
getLista() {
  return this.listaCambio.asObservable();
}
}
