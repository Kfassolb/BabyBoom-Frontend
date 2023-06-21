import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Apoderado } from 'src/app/model/Apoderado';
import { ApoderadoService } from 'src/app/service/apoderado.service';

@Component({
  selector: 'app-apoderado-listar',
  templateUrl: './apoderado-listar.component.html',
  styleUrls: ['./apoderado-listar.component.css']
})
export class ApoderadoListarComponent {
  lista:Apoderado[] = [];
  dataSource:MatTableDataSource<Apoderado> = new MatTableDataSource();
  displayedColumns: string[] = ['idapoderado','idusuario','idbebe','idtiposuscrip','guarderia','nombre','apellido','email']

  constructor(private aS:ApoderadoService, private dialog:MatDialog){}

  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
