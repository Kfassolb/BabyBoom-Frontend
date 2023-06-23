import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Publicacion } from 'src/app/model/Publicacion';
import { PublicacionService } from 'src/app/service/publicacion.service';

@Component({
  selector: 'app-publicacion-listar',
  templateUrl: './publicacion-listar.component.html',
  styleUrls: ['./publicacion-listar.component.css']
})
export class PublicacionListarComponent implements OnInit{

  lista: Publicacion[]=[];
  dataSource: MatTableDataSource<Publicacion>=new MatTableDataSource();
  displayedColumns: string[]=['idpublicacion','idcomunidad','idapoderado','titulopublicacion','comentariopublicacion'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idHigh:number=0;

  constructor(private pS: PublicacionService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.pS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
  }

  filter(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
