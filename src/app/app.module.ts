import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule} from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { RoutingModule} from './routing/routing.module';

import { AppComponent } from './app.component';

import { SalesComponent} from './sales/sales.component'
import { SupportComponent} from './support/support.component';
import { DirectivesComponent} from './directives/directives.component';
import { HovererDirective} from './directives/hoverer.directive';
import { SharedComponent} from './shared/shared.component';
import { CustomComponent} from './customcomponent/customcomponent.component';
import { CarlistComponent } from './customcomponent/carlist/carlist.component';
import { NgInterfacesComponent } from './ng-interfaces/ng-interfaces.component'
import { OnChangeExComponent } from './ng-interfaces/on-change-ex/on-change-ex.component';

import { AuthserviceService } from './authservice.service';
import { ClientCommunicationService} from './ajaxcomm/client-communication.service';
import { AjaxcommComponent } from './ajaxcomm/ajaxcomm.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent, SalesComponent, SupportComponent, DirectivesComponent,HovererDirective,CustomComponent, CarlistComponent, NgInterfacesComponent,
    OnChangeExComponent,
    AjaxcommComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule,
    SharedModule,
    //RouterModule,
    NgbModule.forRoot()
    /*RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )*/
  ],
  providers: [AuthserviceService, ClientCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
