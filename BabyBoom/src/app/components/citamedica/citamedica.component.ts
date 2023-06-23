import { ActivatedRoute } from '@angular/router';
import { ComunidadService } from './../../service/comunidad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citamedica',
  templateUrl: './citamedica.component.html',
  styleUrls: ['./citamedica.component.css']
})
export class CitamedicaComponent implements OnInit{
  ngOnInit(): void {

  }
  constructor(private route:ActivatedRoute){}
}
