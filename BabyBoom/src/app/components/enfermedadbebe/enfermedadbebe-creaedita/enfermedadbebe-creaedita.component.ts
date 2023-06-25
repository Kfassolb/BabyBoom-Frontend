import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Enfermedadbebe } from 'src/app/model/Enfermedadbebe';
import * as moment from 'moment';
import { EnfermedadbebeService } from 'src/app/service/enfermedadbebe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tipoenfermedad } from 'src/app/model/Tipoenfermedad';
import { Bebe } from 'src/app/model/Bebe';
import { TipoEnfermedadeService } from 'src/app/service/tipoenfermedad.service';
import { Servicio } from '../../../model/Servicio';
import { BebeService } from 'src/app/service/bebe.service';

@Component({
  selector: 'app-enfermedadbebe-creaedita',
  templateUrl: './enfermedadbebe-creaedita.component.html',
  styleUrls: ['./enfermedadbebe-creaedita.component.css']
})
export class EnfermedadbebeCreaeditaComponent  {
  id: number = 0;
  edicion: boolean = false;

  /*form: FormGroup = new FormGroup({});*/
  form: FormGroup = new FormGroup({})
  Enfermedadbebe: Enfermedadbebe = new Enfermedadbebe();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaEnfermedad:Tipoenfermedad[]=[]
  listaBebe:Bebe[]=[]
  idEnfermedad:number=0;
  idBebe:number=0;
  constructor(
    private pS: EnfermedadbebeService,
    private router: Router,
    private route: ActivatedRoute,

    private ServicioEnfermedad: TipoEnfermedadeService,
    private ServicioBebe: BebeService,

  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.ServicioEnfermedad.list().subscribe(data =>{this.listaEnfermedad=data})
    this.ServicioBebe.list().subscribe(data =>{this.listaBebe=data})

    this.form = new FormGroup({
      id: new FormControl(),
      sintomasEnfermedad_bebe: new FormControl(),
      enfermedad: new FormControl(),
      bebe: new FormControl(),


    });

  }

  aceptar(): void {
    this.Enfermedadbebe.id = this.form.value['id'];
    this.Enfermedadbebe.sintomasEnfermedad_bebe = this.form.value['sintomasEnfermedad_bebe'];
    this.Enfermedadbebe.tipoenfermedad.nombreTipoEnfermedad=this.form.value['enfermedad.nombreTipoEnfermedad'];
    this.Enfermedadbebe.bebe.nombreBebe=this.form.value['bebe.nombreBebe'];
    let bebeinde= new Bebe();
    bebeinde.idBebe = this.idBebe;
    this.Enfermedadbebe.bebe= bebeinde;
    let enfermedadinde= new Tipoenfermedad();
    enfermedadinde.idTipoEnfermedad = this.idEnfermedad;
    this.Enfermedadbebe.tipoenfermedad= enfermedadinde;

    if (this.form.value['sintomasEnfermedad_bebe'].length > 0) {
      if (this.edicion) {
        this.pS.update(this.Enfermedadbebe).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.Enfermedadbebe).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['pages/Enfermedadbebe']);
    } else {
      this.mensaje = 'Ingrese los sintomas!!!';
    }
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          sintomasEnfermedad_bebe: new FormControl(data.sintomasEnfermedad_bebe),
          enfermedad: new FormControl(data.tipoenfermedad),
          bebe: new FormControl(data.bebe),


        });

      });
    }
  }
}
