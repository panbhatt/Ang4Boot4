import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  private errorMsg : String  ;

  constructor(route : ActivatedRoute) {

    this.errorMsg = route.snapshot.data['message'];
    alert(this.errorMsg);
  }

  ngOnInit() {
  }

}
