import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './customcomponent.component';
import { CarlistComponent } from './carlist/carlist.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomComponent, CarlistComponent]
})
export class CustomcomponentModule { }
