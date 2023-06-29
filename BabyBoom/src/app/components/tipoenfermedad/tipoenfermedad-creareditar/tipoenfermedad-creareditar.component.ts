import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tipoenfermedad } from 'src/app/model/Tipoenfermedad';
import * as moment from 'moment';
import { TipoEnfermedadeService } from 'src/app/service/tipoenfermedad.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tipoenfermedad-creareditar',
  templateUrl: './tipoenfermedad-creareditar.component.html',
  styleUrls: ['./tipoenfermedad-creareditar.component.css']
})
export class TipoenfermedadCreareditarComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  Tipoenfermedad: Tipoenfermedad = new Tipoenfermedad();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(
    private pS: TipoEnfermedadeService,
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
      idTipoEnfermedad: new FormControl(),
      nombreTipoEnfermedad: new FormControl(),
      tipoTipoEnfermedad: new FormControl(),

    });
  }

  aceptar(): void {
    this.Tipoenfermedad.idTipoEnfermedad = this.form.value['idTipoEnfermedad'];
    this.Tipoenfermedad.nombreTipoEnfermedad = this.form.value['nombreTipoEnfermedad'];
    this.Tipoenfermedad.tipoTipoEnfermedad = this.form.value['tipoTipoEnfermedad'];

    if (this.form.value['nombreTipoEnfermedad'].length > 0) {
      if (this.edicion) {
        this.pS.update(this.Tipoenfermedad).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.Tipoenfermedad).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['pages/Enfermedad']);
    } else {
      this.mensaje = 'Ingrese el nombre de la enfermedad!!!';
    }
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idTipoEnfermedad: new FormControl(data.idTipoEnfermedad),
          nombreTipoEnfermedad: new FormControl(data.nombreTipoEnfermedad),
          tipoTipoEnfermedad: new FormControl(data.tipoTipoEnfermedad),

        });

      });
    }
  }
}
