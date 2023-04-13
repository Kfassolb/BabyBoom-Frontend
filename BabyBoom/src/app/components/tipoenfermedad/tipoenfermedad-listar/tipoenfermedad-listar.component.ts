import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tipoenfermedad } from 'src/app/model/Tipoenfermedad';
import { TipoEnfermedadeService } from 'src/app/service/tipoenfermedad.service'

@Component({
  selector: 'app-tipocomprobante-listar',
  templateUrl: './tipoenfermedad-listar.component.html',
  styleUrls: ['./tipoenfermedad-listar.component.css']
})
export class TipocomprobanteListarComponent implements OnInit{
  lista:Tipoenfermedad[] = [];
  dataSource:MatTableDataSource<Tipoenfermedad> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'tipoenfermedad']
  constructor(private tcS:TipoenfermedadService){

  }
  ngOnInit(): void {
      this.tcS.list().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
      })
  }
}
