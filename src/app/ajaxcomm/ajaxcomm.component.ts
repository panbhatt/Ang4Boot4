import { Component, OnInit } from '@angular/core';

import { ClientCommunicationService } from './client-communication.service';

@Component({
  selector: 'app-ajaxcomm',
  templateUrl: './ajaxcomm.component.html',
  styleUrls: ['./ajaxcomm.component.css']
})
export class AjaxcommComponent implements OnInit {

  private languages:Array<any> = new Array<any>();
  private headersParamData:String = "";

  constructor(private clientService : ClientCommunicationService) {


  }

  ngOnInit() {

  }

  getCitiesList() {
    this.clientService.getLanguages().subscribe(
      res => {
        this.languages = res.json();
      },
      error => {
        alert("An Error has occured, while fetching the list of languages");
        console.error(error);
      }
    )
  }

  getHeadersAndParams(){
    this.clientService.getHeadersAndParams().subscribe(
      res => {
        this.headersParamData = JSON.stringify(res.json());
      }
    )
  }

}
