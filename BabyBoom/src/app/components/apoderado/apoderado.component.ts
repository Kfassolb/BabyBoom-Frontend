import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apoderado',
  templateUrl: './apoderado.component.html',
  styleUrls: ['./apoderado.component.css']
})
export class ApoderadoComponent implements OnInit{
  ngOnInit(): void {

  }
  constructor(public route: ActivatedRoute){}
}
