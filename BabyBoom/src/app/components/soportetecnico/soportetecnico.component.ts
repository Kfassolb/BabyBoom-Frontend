import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soportetecnico',
  templateUrl: './soportetecnico.component.html',
  styleUrls: ['./soportetecnico.component.css']
})
export class SoportetecnicoComponent implements OnInit{
  ngOnInit(): void {

  }
  constructor(public route: ActivatedRoute){}
}
