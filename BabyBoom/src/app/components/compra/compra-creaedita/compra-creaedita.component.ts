import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as moment from 'moment';
import { Compra } from 'src/app/model/Compra';
import { CompraService } from 'src/app/service/compra.service';
import { TipocomprobanteComponent } from '../../tipocomprobante/tipocomprobante.component';
import { Tipocomprobante } from 'src/app/model/TipoComprobante';
import { TipocomprobanteService } from 'src/app/service/tipocomprobante.service';
import { ApoderadoService } from 'src/app/service/apoderado.service';
import { Apoderado } from 'src/app/model/apoderado';

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

  constructor(private cS:CompraService, private router:Router,
    private route:ActivatedRoute, private tcS:TipocomprobanteService,
    private aS:ApoderadoService, private tS:TipocomprobanteService){}

  ngOnInit(): void {
    this.aS.list().subscribe(data => { this.listaApoderado = data });
    this.tcS.list().subscribe(data => { this.listaComprobante = data });
    this.form = new FormGroup({
      idCompra:new FormControl(),
      apoderado:new FormControl(),
      tipocomprobante:new FormControl(),
      Fecha:new FormControl(),
      ventaTotal:new FormControl()
    });
  }
  aceptar():void{
    this.compra.idCompra = this.form.value['idCompra'];
    this.compra.apoderado.nombre = this.form.value['apoderado.nombre']; // AQUI FALTA CAMBIAR
    this.compra.tipocomprobante.nombreComprobante = this.form.value['tipocomprobante.nombreComprobante'];
    this.compra.Fecha = this.form.value['Fecha'];
    this.compra.ventaTotal = this.form.value['ventaTotal'];
    if(this.idTipoComprobanteSeleccionado>0 && this.idApoderadoSeleccionado>0){
      let c = new Tipocomprobante();
      c.idTipocomprobante = this.idTipoComprobanteSeleccionado;
      this.compra.tipocomprobante = c;

      let a = new Apoderado();
      a.idApoderado = this.idApoderadoSeleccionado;
      this.compra.apoderado= a;
      this.cS.insert(this.compra).subscribe(()=>{
        this.cS.list().subscribe(data =>{
          this.cS.setList(data);
        })
      })
      this.router.navigate(['compras']);
    }
  }
}
