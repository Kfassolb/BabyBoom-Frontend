import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Compraproducto } from 'src/app/model/Compraproducto';
import { Producto } from 'src/app/model/Producto';
import { Apoderado } from 'src/app/model/apoderado';
import { ApoderadoService } from 'src/app/service/apoderado.service';
import { CompraproductoService } from 'src/app/service/compraproducto.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-compraproducto-creaedita',
  templateUrl: './compraproducto-creaedita.component.html',
  styleUrls: ['./compraproducto-creaedita.component.css']
})
export class CompraproductoCreaeditaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  compraproducto: Compraproducto = new Compraproducto();
  mensaje: String = "";
  listaApoderado: Apoderado[]=[];
  listaProducto: Producto[]=[];

  idApoderadoseleccionado:number=0;
  idProductoseleccionado:number = 0;

  id: number = 0;
  edicion:boolean = false;

  constructor(private cpS:CompraproductoService, private router:Router, private route:ActivatedRoute,
    private aS:ApoderadoService, private pS:ProductoService){};
  ngOnInit(): void {
    this.aS.list().subscribe(data => { this.listaApoderado = data });
    this.pS.list().subscribe(data => { this.listaProducto = data });

    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      especialidad: new FormControl(),
      email: new FormControl(),
      user: new FormControl(),
      bebe: new FormControl(),
      tiposuscrip: new FormControl(),
      guarderia: new FormControl(),
    })
  }
  aceptar():void {
    this.compraproducto.idCompraproducto = this.form.value['idCompraproducto'];
    this.compraproducto.apoderado.nombre = this.form.value['apoderado.nombre'];
    this.compraproducto.producto.Nombre = this.form.value['producto.Nombre'];
    this.compraproducto.Cantidad = this.form.value['Cantidad'];

    if (this.idApoderadoseleccionado>0 && this.idProductoseleccionado>0) {
      if (this.edicion) {
        let a = new Apoderado();
        let p = new Producto();

        a.idApoderado = this.idApoderadoseleccionado;
        p.id = this.idProductoseleccionado;

        this.compraproducto.apoderado=a;
        this.compraproducto.producto=p;

        this.cpS.insert(this.compraproducto).subscribe(()=>{
          this.cpS.list().subscribe (data=>{
            this.cpS.setList(data);
          })
        })
      }else {
        let a = new Apoderado();
        let p = new Producto();

        a.idApoderado = this.idApoderadoseleccionado;
        p.id = this.idProductoseleccionado;

        this.compraproducto.apoderado=a;
        this.compraproducto.producto=p;

        this.cpS.insert(this.compraproducto).subscribe(()=>{
          this.cpS.list().subscribe (data=>{
            this.cpS.setList(data);
          });
        });
      }
      this.router.navigate(['/compraproductos']);
    }else{
      this.mensaje = "Ingrese los valores solicitados!";
    }
  }

}
