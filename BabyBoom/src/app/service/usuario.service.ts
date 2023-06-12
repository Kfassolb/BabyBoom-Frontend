import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = `${base_url}/users`;
  private listCambio=new Subject<User[]>();
  private confirmDeletion = new Subject<Boolean>();

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<User[]>(this.url);
  }
  insert(usuario:User){
    return this.http.post(this.url, usuario);
  }
  setList(listaNueva:User[]){
    return this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<User>(`${this.url}/${id}`)
  }
  update(usuario:User){
    //return this.http.put(this.url + "/" + usuario.idUser, usuario);
    return this.http.put(this.url, usuario);
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDeletion(){
    return this.confirmDeletion.asObservable();
  }
  setConfirmDeletion(estado:boolean){
    return this.confirmDeletion.next(estado);
  }
}
