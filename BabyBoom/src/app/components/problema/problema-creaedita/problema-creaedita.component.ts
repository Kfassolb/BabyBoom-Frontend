import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Problema } from 'src/app/model/Problema';
import { Soportetecnico } from 'src/app/model/Soportetecnico';
<<<<<<< HEAD
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { ProblemaService } from 'src/app/service/problema.service';
import { ActivatedRoute, Router } from '@angular/router';
=======
import { Apoderado } from 'src/app/model/Apoderado';
import { ProblemaService } from 'src/app/service/problema.service';

>>>>>>> 2c222a6006e3c63bda25193b26121de365661bea
@Component({
  selector: 'app-problema-creaedita',
  templateUrl: './problema-creaedita.component.html',
  styleUrls: ['./problema-creaedita.component.css']
})
export class ProblemaCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  problema: Problema = new Problema();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  lista: Soportetecnico[] = [];
<<<<<<< HEAD
  lista1: Apoderado[] = [];
=======
  listaApoderado: Apoderado[] = [];
>>>>>>> 2c222a6006e3c63bda25193b26121de365661bea
  idSoportetecnicoSeleccionado: number = 0;
  idApoderadoSeleccionado: number = 0;

  constructor(
    private prS: ProblemaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prS.list().subscribe(data => {
      this.lista = data;
    });

    this.prS.listApoderado().subscribe(data => {
      this.listaApoderado = data;
    });

    this.form = new FormGroup({
      soportetecnico: new FormControl(),
      apoderado: new FormControl(),
      Titulo: new FormControl(),
      Descripcion: new FormControl(),
      FechaInicio: new FormControl(),
      FechaFin: new FormControl(),
    });
  }

  aceptar(): void {
    this.problema.soportetecnico.idSoporte = this.idSoportetecnicoSeleccionado;
    this.problema.apoderado.idApoderado = this.idApoderadoSeleccionado;
    this.problema.Titulo = this.form.value['Titulo'];
    this.problema.Descripcion = this.form.value['Descripcion'];
    this.problema.FechaInicio = this.form.value['FechaInicio'];
    this.problema.FechaFin = this.form.value['FechaFin'];

    if (this.idSoportetecnicoSeleccionado > 0 || this.idApoderadoSeleccionado > 0) {
      let s = new Soportetecnico();
      s.idSoporte = this.idSoportetecnicoSeleccionado;
      this.problema.soportetecnico = s;

      let a = new Apoderado();
      a.idApoderado = this.idApoderadoSeleccionado;
      this.problema.apoderado = a;

      this.prS.insert(this.problema).subscribe(() => {
        this.prS.list().subscribe(data => {
          this.prS.setList(data);
        });
      });

      this.router.navigate(['problema']);
    }
  }
}
