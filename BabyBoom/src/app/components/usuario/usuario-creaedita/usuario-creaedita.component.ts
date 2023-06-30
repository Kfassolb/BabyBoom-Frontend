import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from 'src/app/model/Users';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit{
  form: FormGroup =new FormGroup({});
  usuario: Users = new Users();
  mensaje: String = "";

  id:number =0;
  edicion:boolean = false;

  constructor(private uS:UsuarioService, private router:Router, private route:ActivatedRoute){};

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion = data['id']!=null;
      this.init();
    })
    this.form = new FormGroup({
      idUser: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
    })
  }
  aceptar():void {
    this.usuario.idUser = this.form.value['idUser'];
    this.usuario.username = this.form.value['username'];
    this.usuario.password = this.form.value['password'];

    this.usuario.enabled = true;

    if (this.form.value['username'].length>0 && this.form.value['password'].length>0) {
      if (this.edicion) {
        this.uS.update(this.usuario).subscribe(()=>{
          this.uS.list().subscribe(data=>{
            this.uS.setList(data);
          })
        })
      }else {
        this.uS.insert(this.usuario).subscribe(()=>{
          this.uS.list().subscribe (data=>{
            this.uS.setList(data);
          });
        });
      }
      this.router.navigate(['/pages/users']);
    }else{
      this.mensaje = "Ingrese los valores solicitados!";
    }
  }

  init(){
    if(this.edicion){
      this.uS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          idUser:new FormControl(data.idUser),
          username:new FormControl(data.username),
          password:new FormControl(data.password),
        });
      });
    }
  }
}
