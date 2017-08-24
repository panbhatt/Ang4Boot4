import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { HovererDirective } from './hoverer.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DirectivesComponent, HovererDirective]
})
export class DirectivesModule { }
