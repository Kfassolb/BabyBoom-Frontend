import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioService } from 'src/app/service/servicio.service';
import {  Servicio } from 'src/app/model/Servicio'
@Component({
  selector: 'app-servicio-listar',
  templateUrl: './servicio-listar.component.html',
  styleUrls: ['./servicio-listar.component.css']
})
export class ServicioListarComponent implements OnInit{
lista:Servicio[]=[];
dataSource:MatTableDataSource<Servicio> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'nombreservicio']
  constructor(private tcS:ServicioService){

  }
  ngOnInit(): void {
      this.tcS.list().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
      })
  }
}
