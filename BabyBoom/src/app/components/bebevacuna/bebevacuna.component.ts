import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bebevacuna',
  templateUrl: './bebevacuna.component.html',
  styleUrls: ['./bebevacuna.component.css']
})
export class BebevacunaComponent implements OnInit{
  ngOnInit(): void {}
  constructor(public route:ActivatedRoute){}
}
