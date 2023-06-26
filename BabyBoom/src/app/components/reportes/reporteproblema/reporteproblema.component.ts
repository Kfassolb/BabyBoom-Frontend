import { Component, OnInit } from '@angular/core';
import { ProblemaService } from 'src/app/service/problema.service';
import { MatTableDataSource } from '@angular/material/table';
import { Problema } from 'src/app/model/Problema';

@Component({
  selector: 'app-reporteproblema',
  templateUrl: './reporteproblema.component.html',
  styleUrls: ['./reporteproblema.component.css']
})
export class ReporteproblemaComponent implements OnInit{

  problemasAsignados: Problema[] = [];
  dataSource: MatTableDataSource<Problema> = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'titulo', 'descripcion', 'fechaInicio', 'fechaFin'];

  constructor(private problemaService: ProblemaService) { }

  ngOnInit(): void {
    this.getProblemasPorApoderado();
  }

  getProblemasPorApoderado(): void {
    const apoderadoId = 123; // Reemplaza con el ID del apoderado que deseas consultar

    this.problemaService.getProblemasPorApoderado(apoderadoId)
      .subscribe((data: Problema[]) => {
        this.problemasAsignados = data;
        this.dataSource.data = data;
      });
  }
}
