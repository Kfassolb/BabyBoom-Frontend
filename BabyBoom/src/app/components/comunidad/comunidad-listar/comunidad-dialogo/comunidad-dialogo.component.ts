import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ComunidadService } from 'src/app/service/comunidad.service';

@Component({
  selector: 'app-comunidad-dialogo',
  templateUrl: './comunidad-dialogo.component.html',
  styleUrls: ['./comunidad-dialogo.component.css']
})
export class ComunidadDialogoComponent implements OnInit {
  constructor(private cS: ComunidadService, private dialogRef:MatDialogRef<ComunidadDialogoComponent>){}
  ngOnInit(): void {}
  confirmar(estado:boolean){
    this.cS.setConfirmarEliminacion(estado);
    this.dialogRef.close();
  }
}
