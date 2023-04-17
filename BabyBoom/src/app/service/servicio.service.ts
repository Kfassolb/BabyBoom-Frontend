import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Servicio } from '../model/Servicio'
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
private url=`${base_url}/servicio`
  constructor(private HttpClient:HttpClient) { }
  list(){
    return this.HttpClient.get<Servicio[]>(this.url)
  }

}
