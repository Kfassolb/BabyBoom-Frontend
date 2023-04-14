import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipoenfermedad',
  templateUrl: './tipoenfermedad.component.html',
  styleUrls: ['./tipoenfermedad.component.css']
})
export class TipoenfermedadComponent implements OnInit{
  ngOnInit(): void {}

  constructor(public route:ActivatedRoute){}
}
