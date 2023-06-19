import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-guarderiaservicio',
  templateUrl: './guarderiaservicio.component.html',
  styleUrls: ['./guarderiaservicio.component.css']
})
export class GuarderiaservicioComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public route:ActivatedRoute){}

}
