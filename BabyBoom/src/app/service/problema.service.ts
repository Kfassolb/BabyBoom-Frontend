import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Problema } from '../model/Problema';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ProblemaService {

  private url = `${base_url}/problemas`
  private listaCambio = new Subject<Problema[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Problema[]>(this.url)
  }
  insert(problema: Problema) {
    return this.http.post(this.url, problema);
  }
  setList(listaNueva: Problema[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

}
