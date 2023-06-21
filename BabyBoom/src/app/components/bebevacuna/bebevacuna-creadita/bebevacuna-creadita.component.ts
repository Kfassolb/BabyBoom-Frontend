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
  //maxFecha: Date = moment().add(-1, 'days').toDate();
  lista: ControlVacunacion[] = [];
  idcontrolvacunacionseleccionado: number = 0;


  constructor(private BVs: BebevacunaService,
    private router: Router,
    private route: ActivatedRoute, private CVs:ControlvacunacionService) {
  }
  ngOnInit(): void {
    this.CVs.list().subscribe(data => { this.lista = data });

    this.form = new FormGroup({
    idBebeVacuna:new FormControl(),
    controlvacunacion :new FormControl()
    });

  }
  aceptar(): void {
    this.bebevacuna.idBebeVacuna=this.form.value['idBebeVacuna'];
    this.bebevacuna.controlvacunacion.id=this.form.value['controlvacunacion.id'];
    if (this.idcontrolvacunacionseleccionado>0) {
      let cv = new ControlVacunacion();
      cv.id = this.idcontrolvacunacionseleccionado;
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

