import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Apoderado } from 'src/app/model/apoderado';
import { Users } from 'src/app/model/Users';
import { Tiposuscripcion } from 'src/app/model/Tiposuscripcion';
import { ApoderadoService } from 'src/app/service/apoderado.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { TiposuscripcionService } from 'src/app/service/tiposuscripcion.service';
import { Bebe } from 'src/app/model/Bebe';
import { BebeService } from 'src/app/service/bebe.service';
import { Guarderia } from 'src/app/model/Guarderia';
import { GuarderiaService } from 'src/app/service/guarderia.service';
@Component({
  selector: 'app-apoderado-creaedita',
  templateUrl: './apoderado-creaedita.component.html',
  styleUrls: ['./apoderado-creaedita.component.css']
})
export class ApoderadoCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  apoderado: Apoderado = new Apoderado();
  mensaje: String = "";
  listaUser: Users[]=[];
  listaBebe: Bebe[]=[];
  listaSuscripcion: Tiposuscripcion[]=[];
  listaGuarderia: Guarderia[]=[];
  idUsuarioSeleccionado: number = 0;
  idBebeSeleccionado: number = 0;
  idTipoSuscripcionSeleccionado: number = 0;
  idGuarderiaSelecccionado: number = 0;

  id: number = 0;
  edicion:boolean = false;

  constructor(private aS:ApoderadoService, private router:Router, private route:ActivatedRoute, private uS: UsuarioService, private tS: TiposuscripcionService, private bS: BebeService, private gS: GuarderiaService){};
  ngOnInit(): void {
    this.uS.list().subscribe(data => { this.listaUser = data });
    this.bS.list().subscribe(data => { this.listaBebe = data });
    this.tS.list().subscribe(data => { this.listaSuscripcion = data });
    this.gS.list().subscribe(data => { this.listaGuarderia = data });
    this.route.params.subscribe((data:Params)=>{
    this.id = data['id'];
    this.edicion = data['id']!=null;
    this.init();
    })
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
    this.apoderado.idApoderado = this.form.value['id'];
    this.apoderado.user.idUser = this.form.value['user.idUser'];
    this.apoderado.bebe.nombreBebe = this.form.value['bebe.nombreBebe'];
    this.apoderado.tiposuscrip.nombresuscripcion = this.form.value['tiposuscrip.nombresuscripcion'];
    this.apoderado.guarderia.nombreGuarderia = this.form.value['guarderia.nombreGuarderia'];
    this.apoderado.nombre = this.form.value['nombre']
    this.apoderado.apellido = this.form.value['apellido']
    this.apoderado.email = this.form.value['email']

    if (this.idUsuarioSeleccionado>0 && this.idBebeSeleccionado>0 && this.idTipoSuscripcionSeleccionado>0) {
      if (this.edicion) {
        let u = new Users();
        let b = new Bebe();
        let t = new Tiposuscripcion();
        let g = new Guarderia();
        u.idUser = this.idUsuarioSeleccionado;
        b.idBebe = this.idBebeSeleccionado;
        t.idTiposuscrip = this.idTipoSuscripcionSeleccionado;
        g.idGuarderia = this.idGuarderiaSelecccionado;
        this.apoderado.user=u;
        this.apoderado.bebe=b;
        this.apoderado.tiposuscrip=t;
        this.apoderado.guarderia=g;
        this.aS.update(this.apoderado).subscribe(()=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }else {
        let u = new Users();
        let b = new Bebe();
        let t = new Tiposuscripcion();
        let g = new Guarderia();
        u.idUser = this.idUsuarioSeleccionado;
        b.idBebe = this.idBebeSeleccionado;
        t.idTiposuscrip = this.idTipoSuscripcionSeleccionado;
        g.idGuarderia = this.idGuarderiaSelecccionado;
        this.apoderado.user=u;
        this.apoderado.bebe=b;
        this.apoderado.tiposuscrip=t;
        this.apoderado.guarderia=g;
        this.aS.insert(this.apoderado).subscribe(()=>{
          this.aS.list().subscribe (data=>{
            this.aS.setList(data);
          });
        });
      }
      this.router.navigate(['/pages/apoderados']);
    }else{
      this.mensaje = "Ingrese los valores solicitados!";
    }
  }
  init(){
    if(this.edicion){
      this.aS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          id:new FormControl(data.idApoderado),
          user:new FormControl(data.user),
          bebe: new FormControl(data.bebe),
          tiposuscrip: new FormControl(data.tiposuscrip),
          guarderia: new FormControl(data.guarderia),
          nombre:new FormControl(data.nombre),
          apellido:new FormControl(data.apellido),
          email:new FormControl(data.email),
        });
      });
    }
  }
}
