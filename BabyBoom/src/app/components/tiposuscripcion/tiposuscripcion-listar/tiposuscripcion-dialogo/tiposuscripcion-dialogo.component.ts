import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TiposuscripcionService } from 'src/app/service/tiposuscripcion.service';

@Component({
  selector: 'app-tiposuscripcion-dialogo',
  templateUrl: './tiposuscripcion-dialogo.component.html',
  styleUrls: ['./tiposuscripcion-dialogo.component.css']
})
export class TiposuscripcionDialogoComponent implements OnInit  {
  constructor(private tcS: TiposuscripcionService, private dialogRef:MatDialogRef<TiposuscripcionDialogoComponent>){}
  ngOnInit(): void {}
  confirmar(estado:boolean){
    this.tcS.setConfirmarEliminacion(estado);
    this.dialogRef.close();
}
}
