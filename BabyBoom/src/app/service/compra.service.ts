import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Compra } from '../model/Compra';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private url = `${base_url}/vaccines`
  private listaCambio = new Subject<Compra[]>()
  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Compra[]>(this.url);
  }
  insert(compra: Compra) {
    return this.http.post(this.url, compra);
  }
  setList(listaNueva: Compra[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
