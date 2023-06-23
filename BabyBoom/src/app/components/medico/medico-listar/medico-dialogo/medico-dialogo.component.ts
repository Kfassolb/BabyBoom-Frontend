import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/service/medico.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-medico-dialogo',
  templateUrl: './medico-dialogo.component.html',
  styleUrls: ['./medico-dialogo.component.css']
})
export class MedicoDialogoComponent implements OnInit{
  constructor(private mS:MedicoService, private dialogRef: MatDialogRef<MedicoDialogoComponent>){}
  ngOnInit(): void {

  }
  confirm(estado:boolean){
    this.mS.setConfirmDeletion(estado);
    this.dialogRef.close();
  }
}
