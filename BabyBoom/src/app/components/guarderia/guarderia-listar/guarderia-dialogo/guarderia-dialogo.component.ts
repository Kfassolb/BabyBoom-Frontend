import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { GuarderiaService } from 'src/app/service/guarderia.service';

@Component({
  selector: 'app-guarderia-dialogo',
  templateUrl: './guarderia-dialogo.component.html',
  styleUrls: ['./guarderia-dialogo.component.css']
})
export class GuarderiaDialogoComponent implements OnInit {

  constructor(private gS:GuarderiaService, private dialogRef:MatDialogRef<GuarderiaDialogoComponent>){}
  ngOnInit(): void {}

  confirmar(estado:boolean){
    this.gS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
