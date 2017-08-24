import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent, SalesComponent, SupportComponent, DirectivesComponent,HovererDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
