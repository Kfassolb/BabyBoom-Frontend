import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuarderiaServicio } from 'src/app/model/GuarderiaServicio';
import { Servicio } from 'src/app/model/Servicio';
import { GuarderiaservicioService } from 'src/app/service/guarderiaservicio.service';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-guarderiaservicio-creadita',
  templateUrl: './guarderiaservicio-creadita.component.html',
  styleUrls: ['./guarderiaservicio-creadita.component.css']
})
export class GuarderiaservicioCreaditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  guarderiaservicio: GuarderiaServicio = new GuarderiaServicio()
  mensaje: string = ""
  //maxFecha: Date = moment().add(-1, 'days').toDate();
  lista: Servicio[] = [];
  idServicioSeleccionado: number = 0;


  constructor(private GSs: GuarderiaservicioService,
    private router: Router,
    private route: ActivatedRoute, private Ss:ServicioService) {
  }
  ngOnInit(): void {
    this.Ss.list().subscribe(data => { this.lista = data });

    this.form = new FormGroup({
      idGuarderiaServicio: new FormControl(),
      Servicio :new FormControl()
    });

  }
  aceptar(): void {
    this.guarderiaservicio.idGuarderiaServicio = this.form.value['idGuarderiaServicio'];
    this.guarderiaservicio.servicio.NombreServicio=this.form.value['servicio.NombreServicio'];
    if (this.idServicioSeleccionado>0) {
      let s = new Servicio();
      s.id = this.idServicioSeleccionado;
      this.guarderiaservicio.servicio=s;
      this.GSs.insert(this.guarderiaservicio).subscribe(() => {
      this.GSs.list().subscribe(data => {
            this.GSs.setList(data);
          })
        })
      this.router.navigate(['guarderiaservicio']);
  }
}
}
