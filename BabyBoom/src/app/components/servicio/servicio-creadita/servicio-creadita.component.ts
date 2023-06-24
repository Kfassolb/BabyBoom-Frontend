import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Servicio } from 'src/app/model/Servicio';
import { ServicioService } from 'src/app/service/servicio.service';
@Component({
  selector: 'app-servicio-creadita',
  templateUrl: './servicio-creadita.component.html',
  styleUrls: ['./servicio-creadita.component.css']
})
export class ServicioCreaditaComponent implements OnInit {
  id: number=0;
  edicion: boolean=false;

form:FormGroup=new FormGroup({})
servicio:Servicio= new Servicio()
mensaje: string = ""
maxFecha:Date=moment().add(-1,'days').toDate();

constructor(private sS:ServicioService,
   private router:Router,
   private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((data:Params)=>{
    this.id=data['id'];
    this.edicion=data['id']!=null;
    this.init();
  })
  this.form = new FormGroup({
    idServicio:new FormControl(),
    nameServicio:new FormControl()
  });
}
aceptar(): void {
  this.servicio.idServicio = this.form.value['idServicio'];
  this.servicio.nameServicio = this.form.value['nameServicio'];

 if (this.form.value['nameServicio'].length>0){
  if(this.edicion){
    this.sS.modificar(this.servicio).subscribe(()=>{
      this.sS.list().subscribe(data=>{
        this.sS.setList(data);
      });
    });
  }else {
    this.sS.insert(this.servicio).subscribe(()=>{
      this.sS.list().subscribe(data=>{
        this.sS.setList(data);
      })
    })
  }
  this.router.navigate(['pages/servicio']);
 }else{
  this.mensaje="Complete los valores requeridos";
 }
}
init() {
  if (this.edicion) {
    this.sS.listarId(this.id).subscribe(data => {
    this.form = new FormGroup({
        idServicio: new FormControl(data.idServicio),
        nameServicio: new FormControl(data.nameServicio),


      });
      console.log(data);
    });
  }
 }
}
