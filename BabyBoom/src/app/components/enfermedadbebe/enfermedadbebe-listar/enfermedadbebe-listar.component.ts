import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bebe } from 'src/app/model/Bebe';
import { BebeService } from 'src/app/service/bebe.service'
import { MatDialog } from '@angular/material/dialog';
import { EnfermedadbebeDialogoComponent } from './enfermedadbebe-dialogo/enfermedadbebe-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';
import { EnfermedadbebeService } from 'src/app/service/enfermedadbebe.service';
import { Enfermedadbebe } from 'src/app/model/Enfermedadbebe';
@Component({
  selector: 'app-enfermedadbebe-listar',
  templateUrl: './enfermedadbebe-listar.component.html',
  styleUrls: ['./enfermedadbebe-listar.component.css']
})
export class EnfermedadbebeListarComponent implements OnInit{
  lista:Enfermedadbebe[] = [];
  dataSource:MatTableDataSource<Enfermedadbebe> = new MatTableDataSource();
  displayedColumns:string[] = ['id','tipoenfermedad','bebe','sintonmas','accion01'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idMayor: number = 0;

  constructor(private tcS:EnfermedadbebeService,private dialog:MatDialog ){}
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
      this.dialog.open(EnfermedadbebeDialogoComponent);
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

