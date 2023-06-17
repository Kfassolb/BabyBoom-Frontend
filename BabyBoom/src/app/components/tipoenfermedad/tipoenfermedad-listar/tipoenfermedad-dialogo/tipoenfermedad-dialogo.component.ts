import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TipoEnfermedadeService } from 'src/app/service/tipoenfermedad.service';
@Component({
  selector: 'app-tipoenfermedad-dialogo',
  templateUrl: './tipoenfermedad-dialogo.component.html',
  styleUrls: ['./tipoenfermedad-dialogo.component.css']
})
export class TipoenfermedadDialogoComponent implements OnInit{
  constructor(private pS: TipoEnfermedadeService,
    private dialogRef: MatDialogRef<TipoenfermedadDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }

}
