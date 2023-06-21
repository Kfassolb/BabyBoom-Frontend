import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BebeVacuna } from 'src/app/model/BebeVacuna';
import { BebevacunaService } from 'src/app/service/bebevacuna.service';

@Component({
  selector: 'app-bebevacuna-listar',
  templateUrl: './bebevacuna-listar.component.html',
  styleUrls: ['./bebevacuna-listar.component.css']
})
export class BebeVacunaListarcomponent implements OnInit {
  lista: BebeVacuna[] = [];
  dataSource: MatTableDataSource<BebeVacuna> = new MatTableDataSource();
  displayedColumns: string[] = ['controlvacuna']


  constructor(private BVs: BebevacunaService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.BVs.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.BVs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
