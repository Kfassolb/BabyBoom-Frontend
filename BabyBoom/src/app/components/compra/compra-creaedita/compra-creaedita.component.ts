import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router,Params } from '@angular/router';
import * as moment from 'moment';
import { Compra } from 'src/app/model/Compra';
import { CompraService } from 'src/app/service/compra.service';
import { TipocomprobanteComponent } from '../../tipocomprobante/tipocomprobante.component';
import { Tipocomprobante } from 'src/app/model/TipoComprobante';
import { TipocomprobanteService } from 'src/app/service/tipocomprobante.service';
import { ApoderadoService } from 'src/app/service/apoderado.service';
import { Apoderado } from 'src/app/model/Apoderado';

@Component({
  selector: 'app-compra-creaedita',
  templateUrl: './compra-creaedita.component.html',
  styleUrls: ['./compra-creaedita.component.css']
})
export class CompraCreaeditaComponent implements OnInit{
  form:FormGroup = new FormGroup({});
  compra:Compra = new Compra()
  mensaje:string=""
  maxFecha:Date = moment().add(-1,'days').toDate();
  listaApoderado:Apoderado[] = [];
  listaComprobante:Tipocomprobante[] = [];
  idTipoComprobanteSeleccionado: number=0;
  idApoderadoSeleccionado:number=0;
  id: number = 0;
  edicion:boolean = false;

  constructor(private cS:CompraService, private router:Router,
    private route:ActivatedRoute, private tcS:TipocomprobanteService,
    private aS:ApoderadoService){}

  ngOnInit(): void {
    this.aS.list().subscribe(data => { this.listaApoderado = data });
    this.tcS.list().subscribe(data => { this.listaComprobante = data });
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion = data['id']!=null;
      this.init();
      })
    this.form = new FormGroup({
      idCompra:new FormControl(),
      apoderado:new FormControl(),
      tipocomprobante:new FormControl(),
      fecha:new FormControl(),
      ventaTotal:new FormControl()
    });
  }
  aceptar():void{
    this.compra.idCompra = this.form.value['idCompra'];
    this.compra.apoderado.nombre = this.form.value['apoderado.nombre']; // AQUI FALTA CAMBIAR
    this.compra.tipocomprobante.nombreComprobante = this.form.value['tipocomprobante.nombreComprobante'];
    this.compra.fecha = this.form.value['fecha'];
    this.compra.ventaTotal = this.form.value['ventaTotal'];
    if(this.idTipoComprobanteSeleccionado>0 && this.idApoderadoSeleccionado>0){
      let c = new Tipocomprobante();
      let a = new Apoderado();
      c.idTipocomprobante = this.idTipoComprobanteSeleccionado;
      a.idApoderado = this.idApoderadoSeleccionado;
      this.compra.tipocomprobante = c;
      this.compra.apoderado= a;
      this.cS.insert(this.compra).subscribe(()=>{
        this.cS.list().subscribe(data =>{
          this.cS.setList(data);
        })
      })
      this.router.navigate(['pages/compras']);
    }else{
      this.mensaje = "Ingrese los valores solicitados!";
    }
  }
  init(){
    if(this.edicion){
      this.cS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          id:new FormControl(data.idCompra),
          apoderado:new FormControl(data.apoderado),
          tipocomprobante:new FormControl(data.tipocomprobante),
          fecha:new FormControl(data.fecha),
          ventaTotal:new FormControl(data.ventaTotal)
        });
      });
    }
  }
}
