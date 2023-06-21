import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApoderadoService } from 'src/app/service/apoderado.service';
@Component({
  selector: 'app-apoderado-dialogo',
  templateUrl: './apoderado-dialogo.component.html',
  styleUrls: ['./apoderado-dialogo.component.css']
})
export class ApoderadoDialogoComponent implements OnInit{
  constructor(private aS:ApoderadoService, private dialogRef: MatDialogRef<ApoderadoDialogoComponent>){}
  ngOnInit(): void {

  }
  confirm(estado:boolean){
    this.aS.setConfirmDeletion(estado);
    this.dialogRef.close();
  }
}
