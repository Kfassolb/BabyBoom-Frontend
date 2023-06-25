import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment'
import { Tiposuscripcion } from 'src/app/model/Tiposuscripcion';
import { TiposuscripcionService } from 'src/app/service/tiposuscripcion.service';

@Component({
  selector: 'app-tiposuscripcion-creaedita',
  templateUrl: './tiposuscripcion-creaedita.component.html',
  styleUrls: ['./tiposuscripcion-creaedita.component.css']
})

export class TiposuscripcionCreaeditaComponent implements OnInit {
  id: number=0;
  edicion:boolean=false;
  form: FormGroup=new FormGroup({});
  tiposuscripcion: Tiposuscripcion=new Tiposuscripcion();
  mensaje: string="";
  constructor(private tcS: TiposuscripcionService, private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.form=new FormGroup({
      id:new FormControl(),
      nombreSuscripcion: new FormControl(),
    })
  }
  aceptar(): void{
    this.tiposuscripcion.id=this.form.value['id'];
    this.tiposuscripcion.nombreSuscripcion=this.form.value['nombreSuscripcion'];

    if(this.form.value['nombreSuscripcion'].length>0){
      if (this.edicion){
        this.tcS.update(this.tiposuscripcion).subscribe(() => {
          this.tcS.list().subscribe(data => {
            this.tcS.setList(data);
          });
      });
    }else{
      this.tcS.insert(this.tiposuscripcion).subscribe(data=>{
        this.tcS.list().subscribe(data=>{
          this.tcS.setList(data);
        });
      });
    }
      this.router.navigate(['TiposSuscripcion']);
    }else{
      this.mensaje="Ingrese suscripcion";
    }
  }
  init() {
    if (this.edicion) {
      this.tcS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombreSuscripcion: new FormControl(data.nombreSuscripcion),
        });

      });
    }
  }

}
