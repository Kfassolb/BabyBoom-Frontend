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

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Problema[]>(this.url)
  }
}
