import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit{
  form: FormGroup =new FormGroup({});
  usuario: Usuario = new Usuario();
  mensaje: String = "";

  constructor(private uS:UsuarioService, private router:Router){};

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      Username: new FormControl(),
      Password: new FormControl(),
    })
  }
  aceptar():void {
    this.usuario.id = this.form.value['id'];
    this.usuario.Username = this.form.value['Username'];
    this.usuario.Password = this.form.value['Password'];

    if (this.form.value['Username'].length>0) {
      this.uS.insert(this.usuario).subscribe(data=>{
        this.uS.list().subscribe (data=>{
          this.uS.setList(data);
        })
      })
      this.router.navigate(['Usuario']);
    }else{
      this.mensaje = "Ingrese el nombre de usuario!!";
    }
  }
}
