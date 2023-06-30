import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ControlVacunacion } from 'src/app/model/ControlVacunacion';
import { ControlvacunacionService } from 'src/app/service/controlvacunacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-controlvacunacion-creaedita',
  templateUrl: './controlvacunacion-creaedita.component.html',
  styleUrls: ['./controlvacunacion-creaedita.component.css']
})
export class ControlvacunacionCreaeditaComponent implements OnInit {
  id: number=0;
  edicion: boolean=false;

form:FormGroup=new FormGroup({})
controlvacunacion:ControlVacunacion= new ControlVacunacion()
mensaje: string = ""
maxFecha:Date=moment().add(-1,'days').toDate();

constructor(private CVs:ControlvacunacionService,
   private router:Router,
   private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((data:Params)=>{
    this.id=data['id'];
    this.edicion=data['id']!=null;
    this.init();
  })
  this.form = new FormGroup({
    idControlVacunacion:new FormControl(),
    fecha:new FormControl(),
    tipoVacuna:new FormControl(),
    estadoVacunacion:new FormControl(),
    nombreVacunador:new FormControl(),
    lugar:new FormControl(),
  });
}
aceptar(): void {
  this.controlvacunacion.idControlVacunacion = this.form.value['idControlVacunacion'];
  this.controlvacunacion.fecha = this.form.value['fecha'];
  this.controlvacunacion.tipoVacuna=this.form.value['tipoVacuna'];
  this.controlvacunacion.estadoVacunacion=this.form.value['estadoVacunacion'];
  this.controlvacunacion.nombreVacunador=this.form.value['nombreVacunador'];
  this.controlvacunacion.lugar=this.form.value['lugar'];
 if (this.form.value['nombreVacunador'].length>0){
  if(this.edicion){
    this.CVs.modificar(this.controlvacunacion).subscribe(()=>{
      this.CVs.list().subscribe(data=>{
        this.CVs.setList(data);
      });
    });
  }else {
    this.CVs.insert(this.controlvacunacion).subscribe(()=>{
      this.CVs.list().subscribe(data=>{
        this.CVs.setList(data);
      })
    })
  }
  this.router.navigate(['pages/controlvacunas']);
 }else{
  this.mensaje="Complete los valores requeridos";
 }
}
init() {
  if (this.edicion) {
    this.CVs.listarId(this.id).subscribe(data => {
    this.form = new FormGroup({
        idControlVacunacion: new FormControl(data.idControlVacunacion),
        NombreServicio: new FormControl(data.nombreVacunador),
        fecha: new FormControl(data.fecha),
        tipoVacuna: new FormControl(data.tipoVacuna),
        estadoVacunacion: new FormControl(data.estadoVacunacion),
        nombreVacunador: new FormControl(data.nombreVacunador),
        lugar: new FormControl(data.lugar),
      });
      console.log(data);
    });
  }
 }
}
