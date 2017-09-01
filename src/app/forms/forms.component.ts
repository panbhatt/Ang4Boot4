import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, RequiredValidator, FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild("f") f:NgForm ;

  // THis is just a way so that we can use the corressponding angular component.
  @ViewChild("fName") firstNameText : FormControl;

  // Use reactive FormBuilder class to generate the forms here. 

  // Reactive Forms code.
  private formG : FormGroup ;

  constructor() { }

  ngOnInit() {
      this.formG = new FormGroup(
        {
          fNameR : new FormControl("", Validators.required),
          lNameR : new FormControl("", Validators.required)
        }
      )

  }

  onSubmit(frmGrp : FormGroup) {
    console.log(frmGrp.valid);
    if(frmGrp.valid) {
      alert(JSON.stringify(frmGrp.value));
    } else {
      console.log(JSON.stringify(frmGrp.value));
    }
  }

}
