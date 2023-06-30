import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BebeVacuna } from 'src/app/model/BebeVacuna';
import { BebevacunaService } from 'src/app/service/bebevacuna.service';

@Component({
  selector: 'app-bebevacuna-listar',
  templateUrl: './bebevacuna-listar.component.html',
  styleUrls: ['./bebevacuna-listar.component.css']
})
export class BebevacunaListarComponent {
  lista: BebeVacuna[]=[];
  dataSource: MatTableDataSource<BebeVacuna>=new MatTableDataSource();
  displayedColumns: string[]=['idbebevacuna','bebe1','controlvacunacion'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idHigh:number=0;

  constructor(private aS: BebevacunaService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.aS.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
  }

  filter(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
