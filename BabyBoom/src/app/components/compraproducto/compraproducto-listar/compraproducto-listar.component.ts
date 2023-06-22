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
  displayedColumns: string[] = ['idcompraproducto','apoderado','producto','cantidad']

  constructor(private cS:CompraproductoService, private dialog:MatDialog){}

  ngOnInit(): void {
    this.cS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.cS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
