import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Publicacion } from 'src/app/model/Publicacion';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { PublicacionDialogoComponent } from './publicacion-dialogo/publicacion-dialogo.component';

@Component({
  selector: 'app-publicacion-listar',
  templateUrl: './publicacion-listar.component.html',
  styleUrls: ['./publicacion-listar.component.css']
})
export class PublicacionListarComponent implements OnInit{
  lista:Publicacion[] = [];
  dataSource:MatTableDataSource<Publicacion> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'sintomasEnfermedad_bebe','accion01'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idMayor: number = 0;

  constructor(private pS:PublicacionService,private dialog:MatDialog ){}
  ngOnInit(): void {
      this.pS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
      });

      this.pS.getList().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
      });
      this.pS.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      });
    }
    confirmar(id: number) {
      this.idMayor = id;
      this.dialog.open(PublicacionDialogoComponent);
    }
    eliminar(id: number) {
      this.pS.eliminar(id).subscribe(() => {
        this.pS.list().subscribe(data => {
          this.pS.setList(data);/* se ejecuta la línea 27 */
          this.dataSource=new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
        });
      });
    }

    filtrar(e: any) {
      this.dataSource.filter = e.target.value.trim();
    }
}
