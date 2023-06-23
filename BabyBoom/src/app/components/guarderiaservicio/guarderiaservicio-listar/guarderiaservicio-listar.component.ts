import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GuarderiaServicio } from 'src/app/model/GuarderiaServicio';
import { GuarderiaservicioService } from 'src/app/service/guarderiaservicio.service';

@Component({
  selector: 'app-guarderiaservicio-listar',
  templateUrl: './guarderiaservicio-listar.component.html',
  styleUrls: ['./guarderiaservicio-listar.component.css']
})
export class GuarderiaservicioListarComponent implements OnInit{
  lista: GuarderiaServicio[]=[];
  dataSource: MatTableDataSource<GuarderiaServicio>=new MatTableDataSource();
  displayedColumns: string[]=['idguarderiaservicio', 'servicio', 'guarderia'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idHigh:number=0;

  constructor(private gsS: GuarderiaservicioService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.gsS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.gsS.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })

  }
  filter(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
