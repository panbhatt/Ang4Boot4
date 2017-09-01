import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, RequiredValidator, FormControl} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild("f") f:NgForm ;

  // THis is just a way so that we can use the corressponding angular component. 
  @ViewChild("fName") firstNameText : FormControl;

  constructor() { }

  ngOnInit() {
  }

}
