import { Component, OnInit } from '@angular/core';

import { ClientCommunicationService } from './client-communication.service';

@Component({
  selector: 'app-ajaxcomm',
  templateUrl: './ajaxcomm.component.html',
  styleUrls: ['./ajaxcomm.component.css']
})
export class AjaxcommComponent implements OnInit {

  private languages:Array<any> = new Array<any>();

  constructor(private clientService : ClientCommunicationService) {


  }

  ngOnInit() {

      this.clientService.getLanguages().subscribe(
        res => {
          this.languages = res.json();
        }
      )
  }

}
