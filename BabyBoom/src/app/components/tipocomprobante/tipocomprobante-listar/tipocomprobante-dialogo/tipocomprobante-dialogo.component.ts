import { Component, OnInit } from '@angular/core';
import { TipocomprobanteService } from 'src/app/service/tipocomprobante.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipocomprobante-dialogo',
  templateUrl: './tipocomprobante-dialogo.component.html',
  styleUrls: ['./tipocomprobante-dialogo.component.css']
})
export class TipocomprobanteDialogoComponent implements OnInit{
constructor(private tcS:TipocomprobanteService, private dialogRef:MatDialogRef<TipocomprobanteDialogoComponent>){}
    ngOnInit(): void {}
    confirmar(estado:boolean){
      this.tcS.setConfirmarEliminacion(estado);
      this.dialogRef.close();
    }
}
