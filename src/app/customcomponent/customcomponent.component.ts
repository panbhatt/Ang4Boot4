import { Component, OnInit } from '@angular/core';

import { ICar } from './icar';

@Component({
  selector: 'app-customcomponent',
  templateUrl: './customcomponent.component.html',
  styleUrls: ['./customcomponent.component.css']
})
export class CustomComponent implements OnInit {

   cars : Array<ICar> = [
    { 'make' : 'NISSAN', 'model' : 'Sentra', 'year' : 2006},
    { 'make' : 'NISSAN', 'model' : 'ALTIMA', 'year' : 2106},
    { 'make' : 'NISSAN', 'model' : 'MAXIMA', 'year' : 2017}

  ];


  constructor() { }

  ngOnInit() {
  }

  deleteCar(car : ICar){
    alert(' Handing in Custom Component. Deleting of Car ' + car.make + " " +car.model + " " + car.year);
  }

}
