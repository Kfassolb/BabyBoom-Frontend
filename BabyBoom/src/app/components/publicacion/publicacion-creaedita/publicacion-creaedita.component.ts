import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router,Route } from '@angular/router';
import { Comunidad } from 'src/app/model/Comunidad';
import { Publicacion } from 'src/app/model/Publicacion';
import { ComunidadService } from 'src/app/service/comunidad.service';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { ComunidadComponent } from '../../comunidad/comunidad.component';

@Component({
  selector: 'app-publicacion-creaedita',
  templateUrl: './publicacion-creaedita.component.html',
  styleUrls: ['./publicacion-creaedita.component.css']
})
export class PublicacionCreaeditaComponent implements OnInit{
  form:FormGroup = new FormGroup({});
  publicacion:Publicacion = new Publicacion()
  mensaje:string=""
  lista:Publicacion[] = [];
  idComunidadSelecionado: number=0;
  idApoderadoSeleccionado:number=0;

  constructor(private pS:PublicacionService, private router:Router,
    private route:ActivatedRoute,
    private aS:ApoderadoService, private cS:ComunidadService){}

  ngOnInit(): void {
    this.aS.list().subscribe(data => { this.lista = data });
    this.form = new FormGroup({
      idCompra:new FormControl(),
      idApoderado:new FormControl(),
      idComunidad:new FormControl(),
      tituloPublicacion:new FormControl(),
      comentarioPublicacion:new FormControl()
    });
  }
  aceptar():void{
    this.publicacion.idPublicacion = this.form.value['idPublicacion'];
    this.publicacion.idApoderado.idApoderado = this.form.value['idApoderado'];
    this.publicacion.idComunidad.idComunidad = this.form.value['idComunidad'];
    this.publicacion.tituloPublicacion = this.form.value['tituloPublicacion'];
    this.publicacion.comentarioPublicacion = this.form.value['comentarioPublicacion'];
    if(this.idComunidadSelecionado>0){
      let c = new Comunidad();
      c.idComunidad = this.idComunidadSelecionado;
      this.publicacion.idComunidad = c;

      let a = new Apoderado();
      a.idApoderado = this.idApoderadoSeleccionado;
      this.publicacion.idApoderado;
      this.pS.insert(this.publicacion).subscribe(()=>{
        this.pS.list().subscribe(data =>{
          this.pS.setList(data);
        })
      })
      this.router.navigate(['publicacion']);
    }
  }

}
