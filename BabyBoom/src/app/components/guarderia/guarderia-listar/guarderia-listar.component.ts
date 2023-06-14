import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Guarderia } from 'src/app/model/Guarderia';
import { GuarderiaService } from 'src/app/service/guarderia.service';
import { GuarderiaDialogoComponent } from './guarderia-dialogo/guarderia-dialogo.component';

@Component({
  selector: 'app-guarderia-listar',
  templateUrl: './guarderia-listar.component.html',
  styleUrls: ['./guarderia-listar.component.css']
})
export class GuarderiaListarComponent implements OnInit{
  lista:Guarderia[]=[];
  dataSource:MatTableDataSource<Guarderia> = new MatTableDataSource();
  displayedColumns: string[] = ['idguarderia','proceso','lugar','fecha','nombreguarderia','acciones']
  private idMayor:number = 0 ;

  constructor(private gS:GuarderiaService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.gS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.gS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.gS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(GuarderiaDialogoComponent);
  }
  eliminar(id: number) {
    this.gS.eliminar(id).subscribe(() => {
      this.gS.list().subscribe(data => {
        this.gS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
