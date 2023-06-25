import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-tipocomprobante-dialogo',
  templateUrl: './producto-dialogo.component.html',
  styleUrls: ['./producto-dialogo.component.css']
})
export class ProductoDialogoComponent implements OnInit{
constructor(private pS:ProductoService, private dialogRef:MatDialogRef<ProductoDialogoComponent>){}
    ngOnInit(): void {}
    confirmar(estado:boolean){
      this.pS.setConfirmarEliminacion(estado);
      this.dialogRef.close();
    }

}
