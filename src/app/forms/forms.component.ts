import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, RequiredValidator} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild("f") f:NgForm ;

  constructor() { }

  ngOnInit() {
  }

}
