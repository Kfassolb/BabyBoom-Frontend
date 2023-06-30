import { Component,OnInit, ViewChild } from '@angular/core';
import { Apoderado } from 'src/app/model/Apoderado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApoderadoService } from 'src/app/service/apoderado.service';
import { MatDialog } from '@angular/material/dialog';
import { ApoderadoDialogoComponent } from './apoderado-dialogo/apoderado-dialogo.component';

@Component({
  selector: 'app-apoderado-listar',
  templateUrl: './apoderado-listar.component.html',
  styleUrls: ['./apoderado-listar.component.css']
})
export class ApoderadoListarComponent implements OnInit{
  lista: Apoderado[]=[];
  dataSource: MatTableDataSource<Apoderado>=new MatTableDataSource();
  displayedColumns: string[]=['id', 'usuario', 'bebe', 'suscripcion','guarderia', 'nombre', 'apellido','email','acciones'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idHigh:number=0;

  constructor(private aS: ApoderadoService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.aS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.aS.getConfirmDeletion().subscribe(data=>{
      data == true? this.delete(this.idHigh):false;
    })
  }
  confirm(id: number){
    this.idHigh = id;
    this.dialog.open(ApoderadoDialogoComponent)
  }
  delete(id:number){
    this.aS.delete(id).subscribe(()=>{
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
