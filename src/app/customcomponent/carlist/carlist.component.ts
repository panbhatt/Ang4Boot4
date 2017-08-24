import { Component, OnInit, Input } from '@angular/core';

import { ICar } from './../icar';

@Component({
  selector: 'carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  @Input('theCar') car : ICar;

  constructor() { }

  ngOnInit() {
  }

}
