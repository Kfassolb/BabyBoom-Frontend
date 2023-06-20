import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Soportetecnico } from 'src/app/model/Soportetecnico';
import { SoportetecnicoService } from 'src/app/service/soportetecnico.service';

@Component({
  selector: 'app-soportetecnico-listar',
  templateUrl: './soportetecnico-listar.component.html',
  styleUrls: ['./soportetecnico-listar.component.css']
})
export class SoportetecnicoListarComponent {
lista: Soportetecnico[] = [];
dataSource:MatTableDataSource<Soportetecnico> = new MatTableDataSource();
displayedColumns: string[] = ['id','NombreSoporte']

private idMayor:number=0;

constructor(private stS:SoportetecnicoService,private dialog:MatDialog){}

ngOnInit(): void {
  this.stS.list().subscribe(data=>{
    this.dataSource = new MatTableDataSource(data);
  })
  this.stS.getList().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
  });
  this.stS.getConfirmarEliminar().subscribe(data => {
    data == true ? this.eliminar(this.idMayor) : false;
  });
}
confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(SoportetecnicoListarComponent);
}
eliminar(id: number) {
  this.stS.eliminar(id).subscribe(() => {
    this.stS.list().subscribe(data => {
      this.stS.setList(data);/* se ejecuta la línea 27 */
    });
  });
}
}
