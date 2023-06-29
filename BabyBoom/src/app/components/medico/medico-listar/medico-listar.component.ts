import { Component,OnInit, ViewChild } from '@angular/core';
import { Medico } from 'src/app/model/medico';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MedicoService } from 'src/app/service/medico.service';
import { MatDialog } from '@angular/material/dialog';
import { MedicoDialogoComponent } from './medico-dialogo/medico-dialogo.component';

@Component({
  selector: 'app-medico-listar',
  templateUrl: './medico-listar.component.html',
  styleUrls: ['./medico-listar.component.css']
})
export class MedicoListarComponent implements OnInit{
  lista: Medico[]=[];
  dataSource: MatTableDataSource<Medico>=new MatTableDataSource();
  displayedColumns: string[]=['idmedico', 'nombre1', 'apellido1','especialidad1','email1','usuario1','acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idHigh:number=0;

  constructor(private mS: MedicoService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.mS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.mS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.mS.getConfirmDeletion().subscribe(data=>{
      data == true? this.delete(this.idHigh):false;
    })
  }
  confirm(id: number){
    this.idHigh = id;
    this.dialog.open(MedicoDialogoComponent)
  }
  delete(id:number){
    this.mS.delete(id).subscribe(()=>{
      this.mS.list().subscribe(data=>{
        this.mS.setList(data); /* se ejecuta la línea 28 */
        this.dataSource = new MatTableDataSource(data); //THIS
        this.dataSource.paginator = this.paginator; //THIS
      })
    })
  }
  filter(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
