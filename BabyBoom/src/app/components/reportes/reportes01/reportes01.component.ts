import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PublicacionComunidadDTO } from 'src/app/model/PublicacionComunidadDTO';
import { PublicacionService } from 'src/app/service/publicacion.service';

@Component({
  selector: 'app-reportes01',
  templateUrl: './reportes01.component.html',
  styleUrls: ['./reportes01.component.css']
})
export class Reportes01Component implements OnInit {
  comunidadCounts: PublicacionComunidadDTO[] = [];
  dataSource: MatTableDataSource<PublicacionComunidadDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['Comunidad','Cantidad']

  constructor(private lS: PublicacionService) { }

  ngOnInit(): void {
    this.lS.getcomunidadCountBytitulo().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getcomunidadCountBytitulo(): void {
    this.lS.getcomunidadCountBytitulo()
      .subscribe((data: PublicacionComunidadDTO[]) => {
        this.comunidadCounts = data;
      });
  }

}
