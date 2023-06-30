import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Problema } from 'src/app/model/Problema';
import { ProblemaService } from 'src/app/service/problema.service';


@Component({
  selector: 'app-problema-listar',
  templateUrl: './problema-listar.component.html',
  styleUrls: ['./problema-listar.component.css']
})
export class ProblemaListarComponent implements OnInit{
lista: Problema[] = [];
dataSource:MatTableDataSource<Problema> =new MatTableDataSource();
displayedColumns: string[] = ['idproblema','idsoporte','idapoderado','titulo1','descripcion1','fechainicio1','fechafin1']
@ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idHigh:number=0;

constructor(private prS:ProblemaService, private dialog: MatDialog) {

}
ngOnInit(): void {
  this.prS.list().subscribe(data =>{
    this.dataSource = new MatTableDataSource(data);
  })
  this.prS.getLista().subscribe(data=>{
    this.dataSource = new MatTableDataSource(data);
  });
}

delete(id:number){
  this.prS.delete(id).subscribe(()=>{
    this.prS.list().subscribe(data=>{
      this.prS.setList(data); /* se ejecuta la línea 28 */
      this.dataSource = new MatTableDataSource(data); //THIS
      this.dataSource.paginator = this.paginator; //THIS
    })
  })
}

  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
