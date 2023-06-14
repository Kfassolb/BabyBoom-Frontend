import { InteractivityChecker } from '@angular/cdk/a11y';
import { Guarderia } from './../../../model/Guarderia';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import * as moment from 'moment';
import { GuarderiaService } from 'src/app/service/guarderia.service';

@Component({
  selector: 'app-guarderia-creaedita',
  templateUrl: './guarderia-creaedita.component.html',
  styleUrls: ['./guarderia-creaedita.component.css']
})
export class GuarderiaCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  guarderia: Guarderia = new Guarderia()
  mensaje: string = ""
  edicion: boolean = false
  id: number = 0

  maxFecha:Date =  moment().add(-1, 'days').toDate();

  constructor(private gS:GuarderiaService, private router:Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      idGuarderia: new FormControl(),
      Proceso: new FormControl(),
      Lugar: new FormControl(),
      Fecha: new FormControl(),
      nombreGuarderia: new FormControl()
    })
  }
  aceptar():void{
    this.guarderia.idGuarderia = this.form.value['id'];
    this.guarderia.Proceso = this.form.value['Proceso'];
    this.guarderia.Lugar = this.form.value['Lugar'];
    this.guarderia.Fecha = this.form.value['Fecha'];
    this.guarderia.nombreGuarderia = this.form.value['nombreGuarderia']

    if(this.form.value['Proceso'].length > 0 && this.form.value['nombreGuarderia'].length > 0){
      if(this.edicion){
        this.gS.modificar(this.guarderia).subscribe(()=>{
          this.gS.list().subscribe(data=>{
            this.gS.setList(data);
          });
        });
      }else{
        this.gS.insert(this.guarderia).subscribe(()=>{
          this.gS.list().subscribe(data=>{
            this.gS.setList(data);
          })
        })
      }
      this.router.navigate(['guarderias']);

    }else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init(){
    if(this.edicion){
      this.gS.listarId(this.id).subscribe(data=>{
        this.form = new FormGroup({
          idGuarderia: new FormControl(data.idGuarderia),
          Proceso: new FormControl(data.Proceso),
          Lugar: new FormControl(data.Lugar),
          Fecha: new FormControl(data.Fecha),
          nombreGuarderia: new FormControl(data.nombreGuarderia)
        });
        console.log(data);
      })
    }
  }
}
