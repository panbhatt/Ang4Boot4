import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  private showName : Boolean = true ;
  private names : String [] = [ 'Ram', 'shyam', 'Pankaj Bhatt'];
  private selection : String = "Name";
  private options : String [] = [ "Name", "Address", "City"];

  constructor() { }

  ngOnInit() {
  }

  toggleName() {
    this.showName = !this.showName ;
  }

}
