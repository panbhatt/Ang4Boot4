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
import {     CustomComponent } from '../customcomponent/customcomponent.component';
import { NgInterfacesComponent } from '../ng-interfaces/ng-interfaces.component';
import { AjaxcommComponent } from '../ajaxcomm/ajaxcomm.component';


import { AuthserviceService } from '../authservice.service';

const routes: Routes = [{
        path: 'sales',
        component: SalesComponent
    },
    {
        path: 'support',
        component: SupportComponent,
        data : {
          'message' : ' I m coming from support via data from Router. '
        }
    },
    {
        path: 'support/:id',
        component: SupportComponent,
        data : {
          'message' : ' I m coming from support ID path. '
        }
    },
    {
        path: 'support/protected/route',
        component: SupportComponent,
        data : {
          'message' : ' I m coming from support ID protected path. '
        },
        canActivate : [
          AuthserviceService
        ]
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
        path: 'interfaces',
        component: NgInterfacesComponent
    },
    {
        path: 'ajaxhttp',
        component: AjaxcommComponent
    },
    {
        path: '**',
        component: SalesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthserviceService]
})
export class RoutingModule {}
