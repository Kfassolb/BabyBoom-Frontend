import { Component, OnInit } from '@angular/core';
import { ReporteEnfermedad } from '../../../model/reporteenfermedad';
import { MatTableDataSource } from '@angular/material/table';
import { TipoEnfermedadService } from 'src/app/service/tipoenfermedad.service';



@Component({
  selector: 'app-reporteenfermedad',
  templateUrl: './reporteenfermedad.component.html',
  styleUrls: ['./reporteenfermedad.component.css']
})
export class ReporteenfermedadComponent implements OnInit{
   ReporteEnfermedad: ReporteEnfermedad[]=[];
   dataSource: MatTableDataSource<ReporteEnfermedad> = new MatTableDataSource();

   displayedColumns: string[] = ['nombre','tipo']

   constructor(private tpS: TipoEnfermedadService){}

   ngOnInit(): void {
       this.tpS.getEnefermedadbyTipo().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      })
   }

   findByTipoTipoEnfermedad(): void{
    this.tpS.getEnefermedadbyTipo()
    .subscribe((data:ReporteEnfermedad[])=>{
      this.ReporteEnfermedad = data;
    } );
   }





}
