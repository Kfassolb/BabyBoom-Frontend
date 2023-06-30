import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Problema } from 'src/app/model/Problema';
import { Soportetecnico } from 'src/app/model/Soportetecnico';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemaService } from 'src/app/service/problema.service';
import { SoportetecnicoService } from 'src/app/service/soportetecnico.service';
import { Apoderado } from 'src/app/model/Apoderado';
import { ApoderadoService } from 'src/app/service/apoderado.service';

@Component({
  selector: 'app-problema-creaedita',
  templateUrl: './problema-creaedita.component.html',
  styleUrls: ['./problema-creaedita.component.css']
})
export class ProblemaCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  problema: Problema = new Problema()
  mensaje: string = ""
  maxFecha1: Date = moment().add(-1, 'days').toDate();

  listaSoporte: Soportetecnico[] = [];
  listaApoderado: Apoderado[] = [];
  idSoportetecnicoSeleccionado: number = 0;
  idApoderadoSeleccionado: number = 0;

  id: number = 0;
  edicion:boolean = false;
  constructor(private router: Router,
    private route: ActivatedRoute, private prS:ProblemaService, private sS:SoportetecnicoService, private aS:ApoderadoService) {
  }
  ngOnInit(): void {
    this.sS.list().subscribe(data => { this.listaSoporte = data });
    this.aS.list().subscribe(data => { this.listaApoderado = data });
    this.form = new FormGroup({
      idProblema:new FormControl(),
      soportetecnico :new FormControl(),
      apoderado :new FormControl(),
      titulo: new FormControl(),
      descripcion: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
    });

  }
  aceptar(): void {
    this.problema.idProblema = this.form.value['idProblema'];
    this.problema.soportetecnico.nombreSoporte = this.form.value['soportetecnico.nombreSoporte'];
    this.problema.apoderado.nombre = this.form.value['apoderado.nombre'];
    this.problema.titulo = this.form.value['titulo'];
    this.problema.descripcion = this.form.value['descripcion'];
    this.problema.fechaInicio = this.form.value['fechaInicio'];
    this.problema.fechaFin = this.form.value['fechaFin'];

    if (this.idApoderadoSeleccionado > 0 && this.idSoportetecnicoSeleccionado>0){
      let s = new Soportetecnico();
      s.idSoporte = this.idSoportetecnicoSeleccionado;
      this.problema.soportetecnico=s;

      let a = new Apoderado();
      a.idApoderado = this.idApoderadoSeleccionado;
      this.problema.apoderado=a;
      this.prS.insert(this.problema).subscribe(() => {
        this.prS.list().subscribe(data => {
              this.prS.setList(data);
            })
          })
        }
      this.router.navigate(['pages/problemas']);
  }
}

