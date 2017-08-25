import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

import { ICar } from './../icar';

@Component({
  selector: 'carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  @Input('theCar') car : ICar;
  @Output('carDelete') carDelEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delMe(car : ICar) {
    this.carDelEmitter.emit(car);
  }

}
