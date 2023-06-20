import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Soportetecnico } from 'src/app/model/Soportetecnico';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SoportetecnicoService } from 'src/app/service/soportetecnico.service';


@Component({
  selector: 'app-soportetecnico-creaedita',
  templateUrl: './soportetecnico-creaedita.component.html',
  styleUrls: ['./soportetecnico-creaedita.component.css']
})
export class SoportetecnicoCreaeditaComponent implements OnInit{
  id:number=0;
  edicion:boolean=false;
  form:FormGroup = new FormGroup({});
  soportetecnico:Soportetecnico = new Soportetecnico();
  mensaje:string = "";
  constructor(private stS:SoportetecnicoService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion= data['id']!=null;
      this.init();
    });

    this.form = new FormGroup({
      idSoporte:new FormControl(),
      NombreSoporte:new FormControl(),

    })
  }
  aceptar():void{
    this.soportetecnico.idSoporte = this.form.value['idSoporte'];
    this.soportetecnico.NombreSoporte = this.form.value['NombreSoporte'];

    if(this.form.value['NombreSoporte'].length>0){
      if(this.edicion){
        this.stS.update(this.soportetecnico).subscribe(()=>{
          this.stS.list().subscribe(data=>{
            this.stS.setList(data);
          });
        });
      }else{
        this.stS.insert(this.soportetecnico).subscribe(data=>{
          this.stS.list().subscribe(data=>{
            this.stS.setList(data);
          })
        })
      }
      this.router.navigate(['Soportetecnico'])
    }else{
      this.mensaje = "Ingrese el nombre!!";
    }
  }

  init(){
    if(this.edicion){
      this.stS.listId(this.id).subscribe(data=>{
        this.form = new FormGroup({
          idSoporte:new FormControl(data.idSoporte),
          NombreSoporte:new FormControl(data.NombreSoporte),


        });
      });
    }
  }
}

