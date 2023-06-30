import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Compra } from 'src/app/model/Compra';
import { CompraService } from 'src/app/service/compra.service';

@Component({
  selector: 'app-compra-listar',
  templateUrl: './compra-listar.component.html',
  styleUrls: ['./compra-listar.component.css']
})
export class CompraListarComponent implements OnInit{
  lista: Compra[] = [];
  dataSource:MatTableDataSource<Compra> = new MatTableDataSource();
  displayedColumns: string[] = ['idcompra','idapoderado','idtipocomprobante','fecha1','ventatotal']

  constructor(private cS:CompraService, private dialog:MatDialog){}

  ngOnInit(): void {
    this.cS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.cS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
