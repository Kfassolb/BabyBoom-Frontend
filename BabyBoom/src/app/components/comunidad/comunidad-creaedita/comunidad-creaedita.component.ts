import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Comunidad } from 'src/app/model/Comunidad';
import { ComunidadService } from 'src/app/service/comunidad.service';

@Component({
  selector: 'app-comunidad-creaedita',
  templateUrl: './comunidad-creaedita.component.html',
  styleUrls: ['./comunidad-creaedita.component.css']
})
export class ComunidadCreaeditaComponent implements OnInit {
  idComunidad: number=0;
  edicion:boolean=false;
  form: FormGroup=new FormGroup({});
  comunidad: Comunidad=new Comunidad();
  mensaje: string="";
  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(private cS: ComunidadService, private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.idComunidad=data['idComunidad'];
      this.edicion = data['idComunidad'] != null;
      this.init();
    })
    this.form=new FormGroup({
      idComunidad:new FormControl(),
      nameComunidad: new FormControl(),
        Contenido: new FormControl(),
        FechaInicio: new FormControl(),
    })
  }
  aceptar(): void{
    this.comunidad.idComunidad=this.form.value['idComunidad'];
    this.comunidad.nameComunidad=this.form.value['nameComunidad'];
    this.comunidad.Contenido=this.form.value['Contenido'];
    this.comunidad.FechaInicio=this.form.value['FechaInicio'];

    if(this.form.value['nameComunidad'].length>0 && this.form.value['FechaInicio'].length>0){
      if (this.edicion){
        this.cS.update(this.comunidad).subscribe(() => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data);
          });
      });
    }else{
      this.cS.insert(this.comunidad).subscribe(data=>{
        this.cS.list().subscribe(data=>{
          this.cS.setList(data);
        });
      });
    }
      this.router.navigate(['Comunidad']);
    }else{
      this.mensaje="Ingrese Comunidad";
    }
  }
  init() {
    if (this.edicion) {
      this.cS.listId(this.idComunidad).subscribe((data) => {
        this.form = new FormGroup({
          idComunidad: new FormControl(data.idComunidad),
          nameComunidad: new FormControl(data.nameComunidad),
          Contenido: new FormControl(data.Contenido),
          FechaInicio: new FormControl(data.FechaInicio),
        });

      });
    }
  }
}
