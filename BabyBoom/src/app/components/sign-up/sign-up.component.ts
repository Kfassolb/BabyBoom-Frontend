import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from 'src/app/model/Users';
import { FormControl, FormGroup } from '@angular/forms';
import { SignUPService } from 'src/app/service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  form: FormGroup =new FormGroup({});
  usuario: Users = new Users();
  mensaje: String = "";
  constructor(private suS:SignUPService, private router:Router, private route:ActivatedRoute){};
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      Username: new FormControl(),
      Password: new FormControl(),
    })
  }
  guardar():void {
    this.usuario.idUser = this.form.value['id'];
    this.usuario.username = this.form.value['Username'];
    this.usuario.password = this.form.value['Password'];

    this.usuario.enabled = true;

    if (this.form.value['Username'].length>0 && this.form.value['Password'].length>0) {
      this.suS.insert(this.usuario).subscribe(()=>{
        this.suS.list().subscribe (data=>{
          this.suS.setList(data);
        });
      });
      this.router.navigate(['/login']);
    }else{
      this.mensaje = "Ingrese los valores solicitados!";
    }

  }
}
