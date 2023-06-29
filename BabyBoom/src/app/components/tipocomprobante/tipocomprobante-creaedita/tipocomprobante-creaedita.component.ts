import { TipocomprobanteService } from './../../../service/tipocomprobante.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tipocomprobante } from 'src/app/model/TipoComprobante';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tipocomprobante-creaedita',
  templateUrl: './tipocomprobante-creaedita.component.html',
  styleUrls: ['./tipocomprobante-creaedita.component.css']
})
export class TipocomprobanteCreaeditaComponent implements OnInit{
  id:number=0;
  contador:number=0;
  edicion:boolean=false;
  form:FormGroup = new FormGroup({});
  tipocomprobante:Tipocomprobante = new Tipocomprobante();
  mensaje:string = "";
  maxFecha:Date = moment().add(-1, 'days').toDate();
  constructor(private tcS:TipocomprobanteService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion= data['id']!=null;
      this.init();
    });

    this.form = new FormGroup({
      idTipocomprobante:new FormControl(),
      nombreComprobante:new FormControl(),
    })
  }
  aceptar():void{
    this.tipocomprobante.idTipocomprobante = this.form.value['idTipocomprobante'];
    this.tipocomprobante.nombreComprobante = this.form.value['nombreComprobante']
    if(this.form.value['nombreComprobante'].length>0){
      if(this.edicion){
        this.tcS.update(this.tipocomprobante).subscribe(()=>{
          this.tcS.list().subscribe(data=>{
            this.tcS.setList(data);
          });
        });
      }else{
        this.tcS.insert(this.tipocomprobante).subscribe(()=>{
          this.tcS.list().subscribe(data=>{
            this.tcS.setList(data);
          })
        })
      }
        this.router.navigate(['/pages/tipocomprobantes'])
    }else{
      this.mensaje = "Ingrese el nombre!!";
    }
  }

  init(){
    if(this.edicion){
      this.tcS.listId(this.id).subscribe((data)=>{
        this.form = new FormGroup({
          idTipocomprobante:new FormControl(data.idTipocomprobante),
          nombreComprobante:new FormControl(data.nombreComprobante)
        });
      });
    }
  }
}
