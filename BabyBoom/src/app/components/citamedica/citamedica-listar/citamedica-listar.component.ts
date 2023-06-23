import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Citamedica } from 'src/app/model/Citamedica';
import { CitamedicaService } from 'src/app/service/citamedica.service';

@Component({
  selector: 'app-citamedica-listar',
  templateUrl: './citamedica-listar.component.html',
  styleUrls: ['./citamedica-listar.component.css']
})
export class CitamedicaListarComponent implements OnInit{
  lista: Citamedica[]=[];
  dataSource: MatTableDataSource<Citamedica>=new MatTableDataSource();
  displayedColumns: string[]=['idcitamedica', 'idmedico', 'idapoderado', 'titulocita','fecha', 'lugar', 'nombreclinica'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idHigh:number=0;

  constructor(private cmS: CitamedicaService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.cmS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.cmS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })

  }

  filter(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
