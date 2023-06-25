import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/service/cargar-scripts.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {
  constructor(private cS:CargarScriptsService){
    cS.carga();
  }
  cerrar() {
    sessionStorage.clear();
  }
}
