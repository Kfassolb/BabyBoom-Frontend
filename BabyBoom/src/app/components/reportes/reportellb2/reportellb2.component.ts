import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Reportellb2 } from 'src/app/model/Reportellb2';
import { CitamedicaService } from 'src/app/service/citamedica.service';
@Component({
  selector: 'app-reportellb2',
  templateUrl: './reportellb2.component.html',
  styleUrls: ['./reportellb2.component.css']
})
export class Reportellb2Component implements OnInit{
  reportllb2: Reportellb2[] = [];
  dataSource: MatTableDataSource<Reportellb2> = new MatTableDataSource();

  displayedColumns: string[] = ['nombre','cantidad']

  constructor(private cmS: CitamedicaService) { }
  nombre:String="Juan";
  ngOnInit(): void {
    this.cmS.getCountMedicalAppointment(this.nombre).subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    })
  }

  getCountMedicalAppointment(nombre:String): void {
    this.cmS.getCountMedicalAppointment(nombre)
      .subscribe((data: Reportellb2[]) => {
        this.reportllb2 = data;
      });
  }

}
