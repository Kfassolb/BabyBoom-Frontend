import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bebe } from 'src/app/model/Bebe';
import { BebeService } from 'src/app/service/bebe.service'
import { MatDialog } from '@angular/material/dialog';
import { BebeDialogoComponent } from './bebe-dialogo/bebe-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-bebe-listar',
  templateUrl: './bebe-listar.component.html',
  styleUrls: ['./bebe-listar.component.css']
})
export class BebeListarComponent implements OnInit{
  lista:Bebe[] = [];
  dataSource:MatTableDataSource<Bebe> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'nombreBebe','fechaBebe','accion01'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idMayor: number = 0;

  constructor(private tcS:BebeService,private dialog:MatDialog ){}
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
      this.dialog.open(BebeDialogoComponent);
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

