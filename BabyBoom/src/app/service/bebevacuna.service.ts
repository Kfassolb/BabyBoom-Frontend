import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Subject } from 'rxjs';
import { BebeVacuna } from '../model/BebeVacuna';

const base_url = environment.base
@Injectable({
  providedIn: 'root',
})
export class BebevacunaService {
private url=`${base_url}/bebevacuna`
//private listaCambio=new Subject<BebeVacuna[]>()

constructor(private http:HttpClient) { }

list() {
  return this.http.get<BebeVacuna[]>(this.url);
}
}
