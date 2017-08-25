import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ng-interfaces',
  templateUrl: './ng-interfaces.component.html',
  styleUrls: ['./ng-interfaces.component.css']
})
export class NgInterfacesComponent implements OnInit, OnChanges {

  private name : String ;
  private changes : String ;

  constructor() {
    this.name = "Pankaj Bhatt";
  }

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log(changes);
    this.changes = JSON.stringify(changes); 
  }

}
