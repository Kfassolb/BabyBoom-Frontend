import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { BebeVacuna } from 'src/app/model/BebeVacuna';
import { BebevacunaService } from 'src/app/service/bebevacuna.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlvacunacionService } from 'src/app/service/controlvacunacion.service';
import { ControlVacunacion } from '../../../model/ControlVacunacion';


@Component({
  selector: 'app-bebevacuna-creadita',
  templateUrl: './bebevacuna-creadita.component.html',
  styleUrls: ['./bebevacuna-creadita.component.css']
})
export class BebevacunaCreaditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  bebevacuna: BebeVacuna = new BebeVacuna()
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  lista: BebeVacuna[] = [];
  idcontrolvacunacion: number = 0;


  constructor(private BVs: BebevacunaService,
    private router: Router,
    private route: ActivatedRoute, private CVs:ControlvacunacionService) {
  }
  ngOnInit(): void {
    this.BVs.list().subscribe(data => { this.lista = data });

    this.form = new FormGroup({
    idControlVacunacion:new FormControl(),
    ControlVacunacion :new FormControl()
    });

  }
  aceptar(): void {
    this.bebevacuna.idBebeVacuna=this.form.value['idBebeVacuna'];
    this.bebevacuna.controlvacunacion.id=this.form.value['bebevacuna.id'];
    if (this.idcontrolvacunacion>0) {
      let cv = new ControlVacunacion();
      cv.id = this.idcontrolvacunacion;
      this.bebevacuna.controlvacunacion=cv;
      this.BVs.insert(this.bebevacuna).subscribe(() => {
      this.BVs.list().subscribe(data => {
            this.BVs.setList(data);
          })
        })

      this.router.navigate(['bebevacuna']);

  }
}
}

