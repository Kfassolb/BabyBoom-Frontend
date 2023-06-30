import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bebe } from 'src/app/model/Bebe';
import { BebeVacuna } from 'src/app/model/BebeVacuna';
import { ControlVacunacion } from 'src/app/model/ControlVacunacion';
import { BebeService } from 'src/app/service/bebe.service';
import { BebevacunaService } from 'src/app/service/bebevacuna.service';
import { ControlvacunacionService } from 'src/app/service/controlvacunacion.service';

@Component({
  selector: 'app-bebevacuna-creaedita',
  templateUrl: './bebevacuna-creaedita.component.html',
  styleUrls: ['./bebevacuna-creaedita.component.css']
})
export class BebevacunaCreaeditaComponent implements OnInit{


    form: FormGroup = new FormGroup({});
    bebevacuna: BebeVacuna = new BebeVacuna()
    mensaje: string = ""
    //maxFecha: Date = moment().add(-1, 'days').toDate();
    listaControlVacunacion: ControlVacunacion[] = [];
    listaBebe:Bebe[]= [];
    idcontrolvacunacionseleccionado: number = 0;
    idbebeseleccionado: number= 0;

    constructor(private BVs: BebevacunaService,
      private router: Router, private bS:BebeService,
      private route: ActivatedRoute, private CVs:ControlvacunacionService) {
    }
    ngOnInit(): void {
      this.CVs.list().subscribe(data => { this.listaControlVacunacion = data });
      this.bS.list().subscribe(data => { this.listaBebe = data });

      this.form = new FormGroup({
      idBebeVacuna:new FormControl(),
      controlVacunacion :new FormControl(),
      bebe:new FormControl()
      });

    }
    aceptar(): void {
      this.bebevacuna.idBebeVacuna=this.form.value['idBebeVacuna'];
      this.bebevacuna.controlVacunacion.nombreVacunador=this.form.value['controlVacunacion.nombreVacunador'];
      this.bebevacuna.bebe.nombreBebe=this.form.value['bebe.nombreBebe'];
      if (this.idcontrolvacunacionseleccionado>0 &&this.idbebeseleccionado>0) {
        let cv = new ControlVacunacion();
        cv.idControlVacunacion = this.idcontrolvacunacionseleccionado;
        this.bebevacuna.controlVacunacion=cv;

        let b = new Bebe();
        b.idBebe = this.idbebeseleccionado;
        this.bebevacuna.bebe = b;

        this.BVs.insert(this.bebevacuna).subscribe(() => {
        this.BVs.list().subscribe(data => {
              this.BVs.setList(data);
            })
          })

        this.router.navigate(['pages/bebevacunas']);

    }
  }
}


