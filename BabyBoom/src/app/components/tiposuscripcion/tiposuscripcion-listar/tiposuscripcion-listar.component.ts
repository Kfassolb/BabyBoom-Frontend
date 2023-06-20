import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Dialog } from '@angular/cdk/dialog';
import { Tiposuscripcion } from 'src/app/model/Tiposuscripcion';
import { TiposuscripcionService } from 'src/app/service/tiposuscripcion.service';
import { TiposuscripcionDialogoComponent } from './tiposuscripcion-dialogo/tiposuscripcion-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tiposuscripcion-listar',
  templateUrl: './tiposuscripcion-listar.component.html',
  styleUrls: ['./tiposuscripcion-listar.component.css']
})
export class TiposuscripcionListarComponent implements OnInit {

  lista:Tiposuscripcion[] = [];
  dataSource:MatTableDataSource<Tiposuscripcion> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'tiposuscripcion','accion01']
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idMayor:number=0

  constructor(private tcS:TiposuscripcionService, private dialog:MatDialog){

  }
  ngOnInit(): void {
      this.tcS.list().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator; //THIS
      });
      this.tcS.getList().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator; //THIS
      });
      this.tcS.getConfirmarEliminar().subscribe(data=>{
        data == true ? this.eliminar(this.idMayor):false;
      })
  }
  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(TiposuscripcionDialogoComponent);
  }
  eliminar(id:number){
    this.tcS.eliminar(id).subscribe(() =>{
      this.tcS.list().subscribe(data=>{
        this.tcS.setList(data);
        this.dataSource = new MatTableDataSource(data); //THIS
        this.dataSource.paginator = this.paginator; //THIS
      });
    });
  }
  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}

