import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Soportetecnico } from 'src/app/model/Soportetecnico';
import * as moment from 'moment';
import { SoportetecnicoService } from 'src/app/service/soportetecnico.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-soportetecnico-creaedita',
  templateUrl: './soportetecnico-creaedita.component.html',
  styleUrls: ['./soportetecnico-creaedita.component.css']
})
export class SoportetecnicoCreaeditaComponent implements OnInit{
  id:number=0;
  contador:number=0;
  edicion:boolean=false;
  form:FormGroup = new FormGroup({});
  soporte:Soportetecnico = new Soportetecnico();
  mensaje:string = "";
  maxFecha:Date = moment().add(-1, 'days').toDate();
  constructor(private stS:SoportetecnicoService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion= data['id']!=null;
      this.init();
    });

    this.form = new FormGroup({
      idSoporte:new FormControl(),
      nombreSoporte:new FormControl(),
    })
  }
  aceptar():void{
    this.soporte.idSoporte = this.form.value['idSoporte'];
    this.soporte.nombreSoporte = this.form.value['nombreSoporte']
    if(this.form.value['nombreSoporte'].length>0){
      if(this.edicion){
        this.stS.modificar(this.soporte).subscribe(()=>{
          this.stS.list().subscribe(data=>{
            this.stS.setList(data);
          });
        });
      }else{
        this.stS.insert(this.soporte).subscribe(data=>{
          this.stS.list().subscribe(data=>{
            this.stS.setList(data);
          })
        })
      }
        this.router.navigate(['pages/soportetecnicos'])
    }else{
      this.mensaje = "Ingrese el nombre!!";
    }
  }

  init(){
    if(this.edicion){
      this.stS.listarId(this.id).subscribe((data)=>{
        this.form = new FormGroup({
          idSoporte:new FormControl(data.idSoporte),
          nombreSoporte:new FormControl(data.nombreSoporte)
        });
      });
    }
  }
}
