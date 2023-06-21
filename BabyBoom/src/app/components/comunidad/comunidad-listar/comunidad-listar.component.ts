import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dialog } from '@angular/cdk/dialog';
import { Comunidad } from 'src/app/model/Comunidad';
import { ComunidadService } from 'src/app/service/comunidad.service';
import { ComunidadDialogoComponent } from './comunidad-dialogo/comunidad-dialogo.component';

@Component({
  selector: 'app-comunidad-listar',
  templateUrl: './comunidad-listar.component.html',
  styleUrls: ['./comunidad-listar.component.css']
})
export class ComunidadListarComponent implements OnInit{
  lista:Comunidad[] = [];
  dataSource:MatTableDataSource<Comunidad> = new MatTableDataSource();
  displayedColumns:string[] = ['idComunidad', 'NombreComunidad','Contenido','FechaInicio','accion01']
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idMayor:number=0

  constructor(private cS:ComunidadService, private dialog:MatDialog){

  }
  ngOnInit(): void {
      this.cS.list().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator; //THIS
      });
      this.cS.getList().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator; //THIS
      });
      this.cS.getConfirmarEliminar().subscribe(data=>{
        data == true ? this.eliminar(this.idMayor):false;
      })
  }
  confirmar(idComunidad: number){
    this.idMayor = idComunidad;
    this.dialog.open(ComunidadDialogoComponent);
  }
  eliminar(idComunidad:number){
    this.cS.eliminar(idComunidad).subscribe(() =>{
      this.cS.list().subscribe(data=>{
        this.cS.setList(data);
        this.dataSource = new MatTableDataSource(data); //THIS
        this.dataSource.paginator = this.paginator; //THIS
      });
    });
  }
  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }

}
