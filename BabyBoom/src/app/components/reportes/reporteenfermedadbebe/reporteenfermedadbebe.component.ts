import { Component, OnInit } from '@angular/core';
import { ReporteEnfermedadBebe } from 'src/app/model/reporteenfermedadbebe';
import { MatTableDataSource } from '@angular/material/table';
import { TipoEnfermedadService } from 'src/app/service/tipoenfermedad.service';

@Component({
  selector: 'app-reporteenfermedadbebe',
  templateUrl: './reporteenfermedadbebe.component.html',
  styleUrls: ['./reporteenfermedadbebe.component.css']
})
export class ReporteenfermedadbebeComponent implements OnInit{
  reporteenfermedadbebe: ReporteEnfermedadBebe[]=[];
  dataSource: MatTableDataSource<ReporteEnfermedadBebe> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre','nombreenfermedad']
  constructor(private tS:TipoEnfermedadService){}
  ngOnInit(): void {
      this.tS.getBebebyNombreEnfermedad().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      })
  }

  findBebesConEnfermedad():void{
    this.tS.getBebebyNombreEnfermedad()
    .subscribe((data: ReporteEnfermedadBebe[]) => {
      this.reporteenfermedadbebe = data;
    });
  }

}
