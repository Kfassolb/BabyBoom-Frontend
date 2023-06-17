import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bebe } from 'src/app/model/Bebe';
import * as moment from 'moment';
import { BebeService } from 'src/app/service/bebe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-bebe-creaedita',
  templateUrl: './bebe-creaedita.component.html',
  styleUrls: ['./bebe-creaedita.component.css']
})
export class BebeCreaeditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  Bebe: Bebe = new Bebe();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(
    private pS: BebeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      nombreBebe: new FormControl(),
      fechaBebe: new FormControl(),

    });
  }

  aceptar(): void {
    this.Bebe.id = this.form.value['id'];
    this.Bebe.nombreBebe = this.form.value['nombreBebe'];
    this.Bebe.fechaBebe = this.form.value['fechaBebe'];

    if (this.form.value['nombreBebe'].length > 0) {
      if (this.edicion) {
        this.pS.update(this.Bebe).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.Bebe).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['Bebe']);
    } else {
      this.mensaje = 'Ingrese el nombre del Bebe!!!';
    }
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombreBebe: new FormControl(data.nombreBebe),
          fechaBebe: new FormControl(data.fechaBebe),

        });

      });
    }
  }
}
