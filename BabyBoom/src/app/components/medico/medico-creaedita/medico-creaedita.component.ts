import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/model/medico';
import { MedicoService } from 'src/app/service/medico.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Users } from 'src/app/model/Users';
import { UsuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-medico-creaedita',
  templateUrl: './medico-creaedita.component.html',
  styleUrls: ['./medico-creaedita.component.css']
})
export class MedicoCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  medico: Medico = new Medico();
  mensaje: String = "";
  lista: Users[]=[];
  idUsuarioSeleccionado: number = 0;

  id: number = 0;
  edicion:boolean = false;

  constructor(private mS:MedicoService, private router:Router, private route:ActivatedRoute, private uS: UsuarioService){};
  ngOnInit(): void {
    this.uS.list().subscribe(data => { this.lista = data });
    this.route.params.subscribe((data:Params)=>{
    this.id = data['id'];
    this.edicion = data['id']!=null;
    this.init();
    })
    this.form = new FormGroup({
      idMedico: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      especialidad: new FormControl(),
      email: new FormControl(),
      user: new FormControl(),
    })
  }
  aceptar():void {
    this.medico.idMedico = this.form.value['idMedico'];
    this.medico.nombre = this.form.value['nombre'];
    this.medico.apellido = this.form.value['apellido'];
    this.medico.especialidad = this.form.value['especialidad'];
    this.medico.email = this.form.value['email'];
    this.medico.user.username = this.form.value['user.username']

    if (this.idUsuarioSeleccionado>0) {
      if (this.edicion) {
        let u = new Users();
        u.idUser = this.idUsuarioSeleccionado;
        this.medico.user=u;
        this.mS.update(this.medico).subscribe(()=>{
          this.mS.list().subscribe(data=>{
            this.mS.setList(data);
          })
        })
      }else {
        let u = new Users();
        u.idUser = this.idUsuarioSeleccionado;
        this.medico.user=u;
        this.mS.insert(this.medico).subscribe(()=>{
          this.mS.list().subscribe (data=>{
            this.mS.setList(data);
          });
        });
      }
      this.router.navigate(['/pages/medicos']);
    }else{
      this.mensaje = "Ingrese los valores solicitados!";
    }
  }
  init(){
    if(this.edicion){
      this.mS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          idMedico:new FormControl(data.idMedico),
          nombre:new FormControl(data.nombre),
          apellido:new FormControl(data.apellido),
          especialidad:new FormControl(data.especialidad),
          email:new FormControl(data.email),
          user:new FormControl(data.user),
        });
      });
    }
  }
}
