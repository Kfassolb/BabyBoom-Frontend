import { Component,OnInit } from '@angular/core';
import { EnfermedadbebeService } from 'src/app/service/enfermedadbebe.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-enfermedadbebe-dialogo',
  templateUrl: './enfermedadbebe-dialogo.component.html',
  styleUrls: ['./enfermedadbebe-dialogo.component.css']
})
export class EnfermedadbebeDialogoComponent implements OnInit{
  constructor(private pS: EnfermedadbebeService,
    private dialogRef: MatDialogRef<EnfermedadbebeDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }

}
