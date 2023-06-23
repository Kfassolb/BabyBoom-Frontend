import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../model/Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class SignUPService {
  private url = `${base_url}/users`;
  private listCambio=new Subject<Users[]>();
  private confirmDeletion = new Subject<Boolean>();

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Users[]>(this.url);
  }
  insert(usuario:Users){
    return this.http.post(this.url, usuario);
  }
  setList(listaNueva:Users[]){
    return this.listCambio.next(listaNueva);
  }
}
