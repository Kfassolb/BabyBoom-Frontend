import { Injectable } from '@angular/core';
import {environment} from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Tipoenfermedad } from '../model/Tipoenfermedad';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TipoEnfermedadeService {
  private url = `${base_url}/tiposenfermedades`
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Tipoenfermedad[]>(this.url);
  }
}
