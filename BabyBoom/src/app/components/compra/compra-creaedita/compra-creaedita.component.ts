import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as moment from 'moment';
import { Compra } from 'src/app/model/Compra';
import { CompraService } from 'src/app/service/compra.service';
import { TipocomprobanteComponent } from '../../tipocomprobante/tipocomprobante.component';
import { Tipocomprobante } from 'src/app/model/TipoComprobante';
import { TipocomprobanteService } from 'src/app/service/tipocomprobante.service';

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
  lista:Compra[] = [];
  idTipoComprobanteSeleccionado: number=0;

  constructor(private cS:CompraService, private router:Router,
    private route:ActivatedRoute,
    private aS:ApoderadoService, private tS:TipocomprobanteService){}

  ngOnInit(): void {
    this.aS.list().subscribe(data => { this.lista = data });
    this.form = new FormGroup({
      idCompra:new FormControl(),
      idApoderado:new FormControl(),
      idTipocomprobante:new FormControl(),
      Fecha:new FormControl(),
      ventaTotal:new FormControl()
    });
  }
  aceptar():void{
    this.compra.idCompra = this.form.value['idCompra'];
    this.compra.idApoderado.idApoderado = this.form.value['idApoderado']; // AQUI FALTA CAMBIAR
    this.compra.idTipocomprobante.id = this.form.value['idTipocomprobante'];
    this.compra.Fecha = this.form.value['Fecha'];
    this.compra.ventaTotal = this.form.value['ventaTotal'];
    if(this.idTipoComprobanteSeleccionado>0){
      let c = new Tipocomprobante();
      c.id = this.idTipoComprobanteSeleccionado;
      this.compra.idTipocomprobante = c;
      this.cS.insert(this.compra).subscribe(()=>{
        this.cS.list().subscribe(data =>{
          this.cS.setList(data);
        })
      })
      this.router.navigate(['compras']);
    }
  }
}
