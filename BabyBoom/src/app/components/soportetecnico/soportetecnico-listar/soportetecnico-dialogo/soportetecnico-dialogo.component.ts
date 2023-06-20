import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SoportetecnicoService } from 'src/app/service/soportetecnico.service';

@Component({
  selector: 'app-soportetecnico-dialogo',
  templateUrl: './soportetecnico-dialogo.component.html',
  styleUrls: ['./soportetecnico-dialogo.component.css']
})
export class SoportetecnicoDialogoComponent implements OnInit{

  constructor(private stS: SoportetecnicoService, private dialogRef:MatDialogRef<SoportetecnicoDialogoComponent>){}
  ngOnInit(): void {}
  confirmar(estado:boolean){
    this.stS.setConfirmarEliminacion(estado);
    this.dialogRef.close();
  }

}
