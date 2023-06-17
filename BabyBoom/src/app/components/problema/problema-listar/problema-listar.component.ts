import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Problema } from 'src/app/model/Problema';


@Component({
  selector: 'app-problema-listar',
  templateUrl: './problema-listar.component.html',
  styleUrls: ['./problema-listar.component.css']
})
export class ProblemaListarComponent implements OnInit{
lista: Problema[] = [];
dataSource:MatTableDataSource<Problema> =new MatTableDataSource();
displayedColumns: string[] = ['id','Titulo','Descripcion','FechaInicio','FechaFin']

private idMayor:number=0;

constructor(private prS:ProblemaService, private dialog: MatDialog) {

}
ngOnInit(): void {
  this.prS.list().subscribe(data =>{
    this.dataSource = new MatTableDataSource(data);
  })
  this.prS.getLista().subscribe(data=>{
    this.dataSource = new MatTableDataSource(data);
  });
  this.prS.getConfirmaEliminacion().subscribe(data=>{
    data== true ? this.eliminar(this.idMayor) : false;
  });
}
confirmar(id:number){
  this.idMayor=id;
  this.dialog.open(ProblemaDialogoComponent);
}
eliminar(id:number){
  this.prS.eliminar(id).subscribe(()=>{
    this.prS.list().subscribe(data=>{
      this.prS.setList(data);
    });
  });
  }
  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
