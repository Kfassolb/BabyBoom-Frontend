import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Compraproducto } from 'src/app/model/Compraproducto';
import { CompraproductoService } from 'src/app/service/compraproducto.service';

@Component({
  selector: 'app-compraproducto-listar',
  templateUrl: './compraproducto-listar.component.html',
  styleUrls: ['./compraproducto-listar.component.css']
})
export class CompraproductoListarComponent implements OnInit{

  lista: Compraproducto[] = [];
  dataSource:MatTableDataSource<Compraproducto> = new MatTableDataSource();
  displayedColumns: string[] = ['idcompra','idapoderado','idtipocomprobante','fecha','ventatotal']

  constructor(private cS:CompraproductoService, private dialog:MatDialog){}

  ngOnInit(): void {
    this.cS.listar().subscribe(data => {
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
