import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compraproducto',
  templateUrl: './compraproducto.component.html',
  styleUrls: ['./compraproducto.component.css']
})
export class CompraproductoComponent implements OnInit{
  ngOnInit(): void {

  }
  constructor(public route:ActivatedRoute){}
}
