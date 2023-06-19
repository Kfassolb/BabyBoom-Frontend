import { Component, OnInit } from '@angular/core';
import { ControlvacunacionService } from 'src/app/service/controlvacunacion.service';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-controlvacunacion-dialogo',
  templateUrl: './controlvacunacion-dialogo.component.html',
  styleUrls: ['./controlvacunacion-dialogo.component.css']
})
export class ControlvacunacionDialogoComponent implements OnInit{

  constructor( private CVs:ControlvacunacionService,
   private dialogRef: MatDialogRef<ControlvacunacionDialogoComponent>){}
   ngOnInit(): void {}
   confirmar(estado:boolean){
    this.CVs.setConfirmaEliminacion(estado);
    this.dialogRef.close();
   }


}
