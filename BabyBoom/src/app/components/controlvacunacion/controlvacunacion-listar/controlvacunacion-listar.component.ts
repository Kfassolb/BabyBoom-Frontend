import { Component, ViewChild, OnInit } from '@angular/core';
import { ControlVacunacion } from 'src/app/model/ControlVacunacion';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ControlvacunacionService } from 'src/app/service/controlvacunacion.service';
import { MatDialog } from '@angular/material/dialog';
import { ControlvacunacionDialogoComponent } from './controlvacunacion-dialogo/controlvacunacion-dialogo.component';

@Component({
  selector: 'app-controlvacunacion-listar',
  templateUrl: './controlvacunacion-listar.component.html',
  styleUrls: ['./controlvacunacion-listar.component.css']
})
export class ControlvacunacionListarComponent implements OnInit{
  lista:ControlVacunacion[]=[];
  dataSource:MatTableDataSource<ControlVacunacion> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'fecha','tipoVacuna','estadoVacunacion','nombreVacunador','lugar','acciones']
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(private CVs:ControlvacunacionService,private dialog: MatDialog){

    }
    ngOnInit(): void {
        this.CVs.list().subscribe(data=>{
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
        })
        this.CVs.getLista().subscribe(data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
        });
        this.CVs.getConfirmaEliminacion().subscribe(data => {
          data == true ? this.eliminar(this.idMayor) : false;
        });
    }
    confirmar(id: number) {
      this.idMayor = id;
      this.dialog.open(ControlvacunacionDialogoComponent);
    }
    eliminar(id: number) {
      this.CVs.eliminar(id).subscribe(() => {
        this.CVs.list().subscribe(data => {
          this.CVs.setList(data);
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
        });
      });
    }
    filter(e:any){
      this.dataSource.filter=e.target.value.trim();
    }
  }
