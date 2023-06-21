import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apoderado } from 'src/app/model/Apoderado';
import { ApoderadoService } from 'src/app/service/apoderado.service';

@Component({
  selector: 'app-apoderado-creaeditar',
  templateUrl: './apoderado-creaeditar.component.html',
  styleUrls: ['./apoderado-creaeditar.component.css']
})
export class ApoderadoCreaeditarComponent implements OnInit{
  id:number = 0;
  edicion: boolean = false;

  form:FormGroup=new FormGroup({})
apoderado:Apoderado= new Apoderado()
mensaje: string = ""


constructor(private aS:ApoderadoService,
   private router:Router,
   private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((data:Params)=>{
    this.id=data['id'];
    this.edicion=data['id']!=null;
    this.init();
  })
  this.form = new FormGroup({
    id:new FormControl(),
    fecha:new FormControl(),
    tipoVacuna:new FormControl(),
    estadoVacunacion:new FormControl(),
    nombreVacunador:new FormControl(),
    lugar:new FormControl(),
  });
}
aceptar(): void {
  this.apoderado.idApoderado = this.form.value['idApoderado'];
  this.apoderado.Nombre = this.form.value['Nombre'];
  this.apoderado.Apellido=this.form.value['Apellido'];
  this.apoderado.CorreoElectronico=this.form.value['CorreoElectronico'];
  this.apoderado.bebe.idBebe=this.form.value['idBebe'];
  this.apoderado.tiposuscrip.id=this.form.value['id'];
  this.apoderado.guarderia.idGuarderia=this.form.value['idGuarderia'];
 if (this.form.value['Nombre'].length>0){
  if(this.edicion){
    this.aS.update(this.apoderado).subscribe(()=>{
      this.aS.list().subscribe(data=>{
        this.aS.setList(data);
      });
    });
  }else {
    this.aS.insert(this.apoderado).subscribe(()=>{
      this.aS.list().subscribe(data=>{
        this.aS.setList(data);
      })
    })
  }
  this.router.navigate(['apoderados']);
 }else{
  this.mensaje="Complete los valores requeridos";
 }
}
init() {
  if (this.edicion) {
    this.aS.listId(this.id).subscribe(data => {
    this.form = new FormGroup({
        idApoderado: new FormControl(data.idApoderado),
        Nombre: new FormControl(data.Nombre),
      });
      console.log(data);
    });
  }
 }
}
