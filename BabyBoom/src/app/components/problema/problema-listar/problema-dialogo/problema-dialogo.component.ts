import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProblemaService } from 'src/app/service/problema.service';

@Component({
  selector: 'app-problema-dialogo',
  templateUrl: './problema-dialogo.component.html',
  styleUrls: ['./problema-dialogo.component.css']
})
export class ProblemaDialogoComponent implements OnInit{
  constructor (private prS:ProblemaService, private dialogRef:MatDialogRef<ProblemaDialogoComponent>){}
  ngOnInit(): void {}
  confirmar(estado:boolean){
    this.prS.setConfirmarEliminacion(estado);
    this.dialogRef.close();
  }

}
