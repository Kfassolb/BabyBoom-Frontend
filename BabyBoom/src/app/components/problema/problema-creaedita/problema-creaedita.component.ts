import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Problema } from 'src/app/model/Problema';
import { Soportetecnico } from 'src/app/model/Soportetecnico';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemaService } from 'src/app/service/problema.service';
import { SoportetecnicoService } from 'src/app/service/soportetecnico.service';

@Component({
  selector: 'app-problema-creaedita',
  templateUrl: './problema-creaedita.component.html',
  styleUrls: ['./problema-creaedita.component.css']
})
export class ProblemaCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  problema: Problema = new Problema()
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaSoporte: Soportetecnico[] = [];
  listaApoderado: Apoderado[] = [];
  idSoportetecnicoSeleccionado: number = 0;
  idApoderadoSeleccionado: number = 0;

  constructor(private router: Router,
    private route: ActivatedRoute, private prS:ProblemaService, private sS:SoportetecnicoService) {
  }
  ngOnInit(): void {
    this.sS.list().subscribe(data => { this.listaSoporte = data });

    this.form = new FormGroup({
      soportetecnico :new FormControl(),
      apoderado :new FormControl(),
      Titulo: new FormControl(),
      Descripcion: new FormControl(),
      FechaInicio: new FormControl(),
      FechaFin: new FormControl(),
    });

  }
  aceptar(): void {
    this.problema.soportetecnico.NombreSoporte = this.form.value['soportetecnico.NombreSoporte'];
    this.problema.apoderado.Nombre = this.form.value['apoderado.Nombre'];
    this.problema.Titulo = this.form.value['Titulo'];
    this.problema.Descripcion = this.form.value['Descripcion'];
    this.problema.FechaInicio = this.form.value['FechaInicio'];
    this.problema.FechaFin = this.form.value['FechaFin'];

    if (this.idSoportetecnicoSeleccionado>0 || this.idApoderadoSeleccionado>0){
      let s = new Soportetecnico();
      s.idSoporte = this.idSoportetecnicoSeleccionado;
      this.problema.soportetecnico=s;

      let a = new Apoderado();
      a.idApoderado = this.idApoderadoSeleccionado;
      this.problema.idApoderado=a;
      this.prS.insert(this.problema).subscribe(() => {
        this.prS.list().subscribe(data => {
              this.prS.setList(data);
            })
          })

      this.router.navigate(['problemas']);

  }
}
}
