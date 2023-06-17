import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BebeService } from 'src/app/service/bebe.service';
@Component({
  selector: 'app-bebe-dialogo',
  templateUrl: './bebe-dialogo.component.html',
  styleUrls: ['./bebe-dialogo.component.css']
})
export class BebeDialogoComponent implements OnInit{
  constructor(private pS: BebeService,
    private dialogRef: MatDialogRef<BebeDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }

}
