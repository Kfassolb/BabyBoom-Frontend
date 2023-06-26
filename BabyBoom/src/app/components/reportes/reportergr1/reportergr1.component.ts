import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GuarderiaSideDTO } from 'src/app/model/GuarderiaSideDTO';
import { GuarderiaService } from 'src/app/service/guarderia.service';

@Component({
  selector: 'app-reportergr1',
  templateUrl: './reportergr1.component.html',
  styleUrls: ['./reportergr1.component.css']
})
export class Reportergr1Component implements OnInit{

  gcount: GuarderiaSideDTO[] = [];
  dataSource: MatTableDataSource<GuarderiaSideDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['side1','cantidad']

  constructor(private gS: GuarderiaService) { }

  ngOnInit(): void {
    this.gS.getSideCountByGuarderia().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getSideCountByGuarderia(): void {
    this.gS.getSideCountByGuarderia()
      .subscribe((data: GuarderiaSideDTO[]) => {
        this.gcount = data;
      });
  }

}
