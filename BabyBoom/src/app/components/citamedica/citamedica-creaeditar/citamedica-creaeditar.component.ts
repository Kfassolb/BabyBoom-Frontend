import { Citamedica } from './../../../model/Citamedica';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Apoderado } from 'src/app/model/apoderado';
import { Medico } from 'src/app/model/medico';
import { ApoderadoService } from 'src/app/service/apoderado.service';
import { CitamedicaService } from 'src/app/service/citamedica.service';
import { MedicoService } from 'src/app/service/medico.service';

@Component({
  selector: 'app-citamedica-creaeditar',
  templateUrl: './citamedica-creaeditar.component.html',
  styleUrls: ['./citamedica-creaeditar.component.css']
})
export class CitamedicaCreaeditarComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  citamedica: Citamedica = new Citamedica();
  mensaje: String = "";
  listaMedica: Medico[]=[];
  listaApoderado: Apoderado[]=[];
  idMedicaSeleccionado: number = 0;
  idApoderadoSeleccionado: number = 0;

  id: number = 0;
  edicion:boolean = false;

  constructor(private cmS:CitamedicaService, private router:Router, private route:ActivatedRoute, private mS: MedicoService, private aS: ApoderadoService){};
  ngOnInit(): void {
    this.mS.list().subscribe(data => { this.listaMedica = data });
    this.aS.list().subscribe(data => { this.listaApoderado = data });


    this.route.params.subscribe((data:Params)=>{
    this.id = data['id'];
    this.edicion = data['id']!=null;
    this.init();
    })
    this.form = new FormGroup({
      idCitaMedica: new FormControl(),
      medico: new FormControl(),
      apoderado: new FormControl(),
      tituloCita: new FormControl(),
      fecha: new FormControl(),
      lugar: new FormControl(),
      nombreClinica: new FormControl(),
    })
  }
  aceptar():void {
    this.citamedica.idCitaMedica = this.form.value['idCitaMedica'];
    this.citamedica.medico.nombre = this.form.value['medico.nombre'];
    this.citamedica.apoderado.nombre = this.form.value['apoderado.nombre'];
    this.citamedica.tituloCita = this.form.value['tituloCita'];
    this.citamedica.fecha = this.form.value['fecha'];
    this.citamedica.lugar = this.form.value['lugar']
    this.citamedica.nombreClinica = this.form.value['nombreClinica']
    if (this.idMedicaSeleccionado>0 && this.idApoderadoSeleccionado>0) {
      if (this.edicion) {
        let m = new Medico();
        let a = new Apoderado();

        m.idMedico = this.idMedicaSeleccionado;
        a.idApoderado = this.idApoderadoSeleccionado;
        this.citamedica.medico=m;
        this.citamedica.apoderado=a;

        this.cmS.update(this.citamedica).subscribe(()=>{
          this.cmS.list().subscribe(data=>{
            this.cmS.setList(data);
          })
        })
      }else {
        let m = new Medico();
        let a = new Apoderado();

        m.idMedico = this.idMedicaSeleccionado;
        a.idApoderado = this.idApoderadoSeleccionado;
        this.citamedica.medico=m;
        this.citamedica.apoderado=a;
        this.cmS.insert(this.citamedica).subscribe(()=>{
          this.cmS.list().subscribe (data=>{
            this.cmS.setList(data);
          });
        });
      }
      this.router.navigate(['/pages/citamedicas']);
    }else{
      this.mensaje = "Ingrese los valores solicitados!";
    }
  }
  init(){
    if(this.edicion){
      this.cmS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          idCitaMedica:new FormControl(data.idCitaMedica),
          medico:new FormControl(data.medico),
          apoderado: new FormControl(data.apoderado),
          tituloCita: new FormControl(data.tituloCita),
          fecha: new FormControl(data.fecha),
          lugar:new FormControl(data.lugar),
          nombreClinica:new FormControl(data.nombreClinica),
        });
      });
    }
  }
}
