import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Soportetecnico } from 'src/app/model/Soportetecnico';
import { SoportetecnicoService } from 'src/app/service/soportetecnico.service';
import { ApoderadoDialogoComponent } from '../../apoderado/apoderado-listar/apoderado-dialogo/apoderado-dialogo.component';

@Component({
  selector: 'app-soportetecnico-listar',
  templateUrl: './soportetecnico-listar.component.html',
  styleUrls: ['./soportetecnico-listar.component.css']
})
export class SoportetecnicoListarComponent {
  lista: Soportetecnico[]=[];
  dataSource: MatTableDataSource<Soportetecnico>=new MatTableDataSource();
  displayedColumns: string[]=['idsoporte', 'nombresoporte','acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idHigh:number=0;

  constructor(private aS: SoportetecnicoService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.aS.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.aS.getConfirmaEliminacion().subscribe(data=>{
      data == true? this.delete(this.idHigh):false;
    })
  }
  confirm(id: number){
    this.idHigh = id;
    this.dialog.open(ApoderadoDialogoComponent)
  }
  delete(id:number){
    this.aS.eliminar(id).subscribe(()=>{
      this.aS.list().subscribe(data=>{
        this.aS.setList(data); /* se ejecuta la línea 28 */
        this.dataSource = new MatTableDataSource(data); //THIS
        this.dataSource.paginator = this.paginator; //THIS
      })
    })
  }
  filter(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
