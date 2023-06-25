import { Component,OnInit } from '@angular/core';
import { Reportellb1 } from 'src/app/model/Reportellb1';
import { MatTableDataSource } from '@angular/material/table'
import { CitamedicaService } from 'src/app/service/citamedica.service';

@Component({
  selector: 'app-reportellb1',
  templateUrl: './reportellb1.component.html',
  styleUrls: ['./reportellb1.component.css']
})
export class Reportellb1Component implements OnInit{
  reportllb1: Reportellb1[] = [];
  dataSource: MatTableDataSource<Reportellb1> = new MatTableDataSource();

  displayedColumns: string[] = ['lugar','cantidad']

  constructor(private cmS: CitamedicaService) { }

  ngOnInit(): void {
    this.cmS.getCountByplace().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getPetCountByVaccine(): void {
    this.cmS.getCountByplace()
      .subscribe((data: Reportellb1[]) => {
        this.reportllb1 = data;
      });
  }
}
