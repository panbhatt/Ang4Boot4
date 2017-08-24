import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    SalesComponent
} from '../sales/sales.component';
import {
    SupportComponent
} from '../support/support.component';
import {     DirectivesComponent } from '../directives/directives.component';
import {     CustomComponent } from '../customcomponent/customcomponent.component'
const routes: Routes = [{
        path: 'sales',
        component: SalesComponent
    },
    {
        path: 'support',
        component: SupportComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent
    },
    {
        path: 'component',
        component: CustomComponent
    },
    {
        path: '**',
        component: SalesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule {}
