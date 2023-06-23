import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comunidad } from 'src/app/model/Comunidad';
import * as moment from 'moment';
import { ComunidadService } from 'src/app/service/comunidad.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-comunidad-creaeditar',
  templateUrl: './comunidad-creaeditar.component.html',
  styleUrls: ['./comunidad-creaeditar.component.css']
})
export class ComunidadCreaeditarComponent implements OnInit{

  id: number=0;
  edicion: boolean=false;

form:FormGroup=new FormGroup({})
comunidad:Comunidad= new Comunidad()
mensaje: string = ""
maxFecha:Date=moment().add(-1,'days').toDate();

constructor(private cS:ComunidadService,
   private router:Router,
   private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((data:Params)=>{
    this.id=data['id'];
    this.edicion=data['id']!=null;
    this.init();
  })
  this.form = new FormGroup({
    idComunidad:new FormControl(),
    nameComunidad:new FormControl(),
    Contenido:new FormControl(),
    FechaInicio:new FormControl(),
  });
}
aceptar(): void {
  this.comunidad.idComunidad = this.form.value['idComunidad'];
  this.comunidad.nameComunidad = this.form.value['nameComunidad'];
  this.comunidad.Contenido = this.form.value['Contenido'];
  this.comunidad.FechaInicio = this.form.value['FechaInicio'];
 if (this.form.value['nameComunidad'].length>0){
  if(this.edicion){
    this.cS.modificar(this.comunidad).subscribe(()=>{
      this.cS.list().subscribe(data=>{
        this.cS.setList(data);
      });
    });
  }else {
    this.cS.insert(this.comunidad).subscribe(()=>{
      this.cS.list().subscribe(data=>{
        this.cS.setList(data);
      })
    })
  }
  this.router.navigate(['comunidades']);
 }else{
  this.mensaje="Complete los valores requeridos";
 }
}
init() {
  if (this.edicion) {
    this.cS.listarId(this.id).subscribe(data => {
    this.form = new FormGroup({
      idComunidad: new FormControl(data.idComunidad),
      nameComunidad: new FormControl(data.nameComunidad),
      Contenido: new FormControl(data.Contenido),
      FechaInicio: new FormControl(data.FechaInicio),
      });
      console.log(data);
    });
  }
 }
}
