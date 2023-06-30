import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Comunidad } from 'src/app/model/Comunidad';
import { ComunidadService } from 'src/app/service/comunidad.service';
import { ServicioDialogoComponent } from '../../servicio/servicio-listar/servicio-dialogo/servicio-dialogo.component';

@Component({
  selector: 'app-comunidad-listar',
  templateUrl: './comunidad-listar.component.html',
  styleUrls: ['./comunidad-listar.component.css']
})
export class ComunidadListarComponent implements OnInit{

  lista:Comunidad[]=[];
  dataSource:MatTableDataSource<Comunidad> = new MatTableDataSource();
  displayedColumns:string[] = ['idcomunidad', 'namecomunidad','contenido1','fechainicio1','acciones']
  private idMayor: number = 0;
  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(private Ss:ComunidadService,private dialog: MatDialog){

    }
    ngOnInit(): void {
        this.Ss.list().subscribe(data=>{
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
        })
        this.Ss.getLista().subscribe(data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
        });
        this.Ss.getConfirmaEliminacion().subscribe(data => {
          data == true ? this.eliminar(this.idMayor) : false;
        });
    }
    confirmar(id: number) {
      this.idMayor = id;
      this.dialog.open(ServicioDialogoComponent);
    }
    eliminar(id: number) {
      this.Ss.eliminar(id).subscribe(() => {
        this.Ss.list().subscribe(data => {
          this.Ss.setList(data);/* se ejecuta la línea 27 */
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
        });
      });
    }
    filter(e:any){
      this.dataSource.filter=e.target.value.trim();
    }
}
