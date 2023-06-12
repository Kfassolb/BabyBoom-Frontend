import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit{
  form: FormGroup =new FormGroup({});
  usuario: User = new User();
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
      id: new FormControl(),
      Username: new FormControl(),
      Password: new FormControl(),
    })
  }
  aceptar():void {
    this.usuario.idUser = this.form.value['id'];
    this.usuario.username = this.form.value['Username'];
    this.usuario.password = this.form.value['Password'];

    if (this.form.value['Username'].length>0 && this.form.value['Password'].length>0) {
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
      this.router.navigate(['users']);
    }else{
      this.mensaje = "Ingrese los valores solicitados!";
    }
  }

  init(){
    if(this.edicion){
      this.uS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          id:new FormControl(data.idUser),
          Username:new FormControl(data.username),
          Password:new FormControl(data.password),
        });
      });
    }
  }
}
