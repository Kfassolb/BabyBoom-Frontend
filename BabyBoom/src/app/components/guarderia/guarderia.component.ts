import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guarderia',
  templateUrl: './guarderia.component.html',
  styleUrls: ['./guarderia.component.css']
})
export class GuarderiaComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(public route:ActivatedRoute){}
}
