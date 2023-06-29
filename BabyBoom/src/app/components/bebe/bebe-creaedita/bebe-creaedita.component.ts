import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bebe } from 'src/app/model/Bebe';
import * as moment from 'moment';
import { BebeService } from 'src/app/service/bebe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoEnfermedadService } from 'src/app/service/tipoenfermedad.service';
import { Tipoenfermedad } from 'src/app/model/Tipoenfermedad';

@Component({
  selector: 'app-bebe-creaedita',
  templateUrl: './bebe-creaedita.component.html',
  styleUrls: ['./bebe-creaedita.component.css']
})
export class BebeCreaeditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  bebe: Bebe = new Bebe();
  listaEnfermedad: Tipoenfermedad[] = [];
  mensaje:String = "";
  idEnfermedadSeleccionado:number = 0;
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(private pS: BebeService,private router: Router,private route: ActivatedRoute,
    private teS:TipoEnfermedadService) {}

  ngOnInit(): void {
    this.teS.list().subscribe(data => { this.listaEnfermedad = data });
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      idBebe: new FormControl(),
      nombreBebe: new FormControl(),
      fechaBebe: new FormControl(),
      tipoEnfermedad: new FormControl()
    });
  }

  aceptar(): void {
    this.bebe.idBebe = this.form.value['idBebe'];
    this.bebe.nombreBebe = this.form.value['nombreBebe'];
    this.bebe.fechaBebe = this.form.value['fechaBebe'];
    this.bebe.tipoEnfermedad.nombreTipoEnfermedad = this.form.value['tipoEnfermedad.nombreTipoEnfermedad'];
    if (this.idEnfermedadSeleccionado> 0) {
      if (this.edicion) {
        let e = new Tipoenfermedad();
        e.idTipoEnfermedad = this.idEnfermedadSeleccionado;
        this.bebe.tipoEnfermedad = e;
        this.pS.update(this.bebe).subscribe(() => {
          this.pS.list().subscribe(data => {
            this.pS.setList(data);
          });
        });
      } else {
        let e = new Tipoenfermedad();
        e.idTipoEnfermedad = this.idEnfermedadSeleccionado;
        this.bebe.tipoEnfermedad = e;
        this.pS.insert(this.bebe).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['/pages/Bebe']);
    } else {
      this.mensaje = 'Ingrese el nombre del Bebe!!!';
    }
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idBebe: new FormControl(data.idBebe),
          nombreBebe: new FormControl(data.nombreBebe),
          fechaBebe: new FormControl(data.fechaBebe),
          tipoEnfermedad:new FormControl(data.tipoEnfermedad)
        });

      });
    }
  }
}
