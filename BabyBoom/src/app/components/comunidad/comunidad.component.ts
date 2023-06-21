import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(public route:ActivatedRoute){}

}
