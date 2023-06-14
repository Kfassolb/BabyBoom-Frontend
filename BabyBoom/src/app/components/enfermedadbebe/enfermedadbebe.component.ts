import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enfermedadbebe',
  templateUrl: './enfermedadbebe.component.html',
  styleUrls: ['./enfermedadbebe.component.css']
})
export class EnfermedadbebeComponent implements OnInit{
  ngOnInit(): void {}

  constructor(public route:ActivatedRoute){}

}
