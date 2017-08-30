import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  private errorMsg : String  ;
  private pathParam : String;
  private queryParam : Number ;

  constructor(route : ActivatedRoute) {

    this.errorMsg = route.snapshot.data['message'];
    console.log(this.errorMsg);


    route.data.subscribe((data: Data) => { console.log("ROute data = " + data['message'])});

    this.pathParam = route.snapshot.paramMap.get("id");

    console.log("PATH PARAM is " + this.pathParam);
    // getting path component through the subscribe
    route.paramMap.subscribe(
      params => { console.log("This comes from RX_Subscrit part " + params.get("id"))}
    )




  }

  ngOnInit() {
  }

}
