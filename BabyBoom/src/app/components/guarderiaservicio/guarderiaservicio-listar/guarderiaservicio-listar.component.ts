import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { GuarderiaServicio } from 'src/app/model/GuarderiaServicio';
import { GuarderiaservicioService } from 'src/app/service/guarderiaservicio.service';

@Component({
  selector: 'app-guarderiaservicio-listar',
  templateUrl: './guarderiaservicio-listar.component.html',
  styleUrls: ['./guarderiaservicio-listar.component.css']
})
export class GuarderiaservicioListarComponent implements OnInit{
  lista: GuarderiaServicio[] = [];
  dataSource: MatTableDataSource<GuarderiaServicio> = new MatTableDataSource();
  displayedColumns: string[] = ['idGuarderiaServicio','servicio']


  constructor(private GSs: GuarderiaservicioService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.GSs.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.GSs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
