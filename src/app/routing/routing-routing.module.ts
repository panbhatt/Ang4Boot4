import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent} from '../sales/sales.component'
import { SupportComponent} from '../support/support.component';
import { SharedComponent} from '../shared/shared.component';

	const appRoutes: 	Routes	=	[
{
path: 	'sales',
component: 	SalesComponent
},
{
path: 	'support',
component: 	SupportComponent
},
{
path: 	'**',
component: 	SupportComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
