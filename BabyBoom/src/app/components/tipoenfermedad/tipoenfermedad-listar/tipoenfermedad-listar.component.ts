import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tipoenfermedad } from 'src/app/model/Tipoenfermedad';
import { TipoEnfermedadService } from 'src/app/service/tipoenfermedad.service'
import { MatDialog } from '@angular/material/dialog';
import { TipoenfermedadDialogoComponent } from './tipoenfermedad-dialogo/tipoenfermedad-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tipoenfermedad-listar',
  templateUrl: './tipoenfermedad-listar.component.html',
  styleUrls: ['./tipoenfermedad-listar.component.css']
})
export class TipoenfermedadListarComponent implements OnInit{
  lista:Tipoenfermedad[] = [];
  dataSource:MatTableDataSource<Tipoenfermedad> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'nombreenfermedad','tipoenfermedad','accion01'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idMayor: number = 0;

  constructor(private tcS:TipoEnfermedadService,private dialog:MatDialog ){}
  ngOnInit(): void {
      this.tcS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
      });

      this.tcS.getList().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
      });
      this.tcS.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      });
    }
    confirmar(id: number) {
      this.idMayor = id;
      this.dialog.open(TipoenfermedadDialogoComponent);
    }
    eliminar(id: number) {
      this.tcS.eliminar(id).subscribe(() => {
        this.tcS.list().subscribe(data => {
          this.tcS.setList(data);/* se ejecuta la línea 27 */
          this.dataSource=new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
        });
      });
    }

    filtrar(e: any) {
      this.dataSource.filter = e.target.value.trim();
    }

  }

