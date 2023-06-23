import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comunidad } from 'src/app/model/Comunidad';
import { Publicacion } from 'src/app/model/Publicacion';
import { Apoderado } from 'src/app/model/apoderado';
import { ApoderadoService } from 'src/app/service/apoderado.service';
import { ComunidadService } from 'src/app/service/comunidad.service';
import { PublicacionService } from 'src/app/service/publicacion.service';

@Component({
  selector: 'app-publicacion-creaeditar',
  templateUrl: './publicacion-creaeditar.component.html',
  styleUrls: ['./publicacion-creaeditar.component.css']
})
export class PublicacionCreaeditarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  publicacion: Publicacion = new Publicacion();
  mensaje: String = "";
  listaComunidad: Comunidad[]=[];
  listaApoderado: Apoderado[]=[];
  idComunidadSeleccionado: number = 0;
  idApoderadoSeleccionado: number = 0;


  id: number = 0;
  edicion:boolean = false;

  constructor(private pS:PublicacionService, private router:Router, private route:ActivatedRoute, private cS: ComunidadService, private aS: ApoderadoService){};
  ngOnInit(): void {
    this.cS.list().subscribe(data => { this.listaComunidad = data });
    this.aS.list().subscribe(data => { this.listaApoderado = data });

    this.route.params.subscribe((data:Params)=>{
    this.id = data['id'];
    this.edicion = data['id']!=null;
    })
    this.form = new FormGroup({
      idPublicacion: new FormControl(),
      comunidad: new FormControl(),
      apoderado: new FormControl(),
      tituloPublicacion: new FormControl(),
      comentarioPublicacion: new FormControl(),
    })
  }
  aceptar():void {
    this.publicacion.idPublicacion = this.form.value['idPublicacion'];
    this.publicacion.comunidad.idComunidad = this.form.value['comunidad.idComunidad'];
    this.publicacion.apoderado.idApoderado = this.form.value['apoderado.idApoderado'];
    this.publicacion.tituloPublicacion = this.form.value['tituloPublicacion'];
    this.publicacion.comentarioPublicacion = this.form.value['comentarioPublicacion'];

    if (this.idComunidadSeleccionado>0 && this.idApoderadoSeleccionado>0) {
      if (this.edicion) {
        let c = new Comunidad();
        let a = new Apoderado();

        c.idComunidad = this.idComunidadSeleccionado;
        a.idApoderado = this.idApoderadoSeleccionado;

        this.publicacion.comunidad=c;
        this.publicacion.apoderado=a;

        this.pS.update(this.publicacion).subscribe(()=>{
          this.pS.list().subscribe(data=>{
            this.pS.setList(data);
          })
        })
      }else {
        let c = new Comunidad();
        let a = new Apoderado();

        c.idComunidad = this.idComunidadSeleccionado;
        a.idApoderado = this.idApoderadoSeleccionado;

        this.publicacion.comunidad=c;
        this.publicacion.apoderado=a;

        this.pS.insert(this.publicacion).subscribe(()=>{
          this.pS.list().subscribe (data=>{
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['/pages/publicaciones']);
    }else{
      this.mensaje = "Ingrese los valores solicitados!";
    }
  }
}
