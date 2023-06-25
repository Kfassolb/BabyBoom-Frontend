import { Component,OnInit } from '@angular/core';
import { CitamedicaService } from 'src/app/service/citamedica.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-citamedica-dialogo',
  templateUrl: './citamedica-dialogo.component.html',
  styleUrls: ['./citamedica-dialogo.component.css']
})
export class CitamedicaDialogoComponent {
  constructor(private cmS:CitamedicaService, private dialogRef: MatDialogRef<CitamedicaDialogoComponent>){}
  ngOnInit(): void {

  }
  confirm(estado:boolean){
    this.cmS.setConfirmDeletion(estado);
    this.dialogRef.close();
  }
}
