import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditBillComponent } from './billing/add-edit-bill/add-edit-bill.component';
import { AddEditBillingComponent } from './billing/add-edit-billing/add-edit-billing.component';
import { BillListComponent } from './billing/bill/bill-list.component';
import { BillingListComponent } from './billing/billing-list/billing-list.component';
import { AddEditClientComponent } from './client/add-edit-client/add-edit-client.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { AddEditServiceComponent } from './service/add-edit-service/add-edit-service.component';
import { ServiceListComponent } from './service/service-list/service-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'billing',
    pathMatch: 'full'
  },
  {
    path: 'client',
    component: ClientListComponent
  },
  {
    path: 'client/add-edit-client',
    component: AddEditClientComponent
  },
  {
    path: 'service',
    component: ServiceListComponent
  },
  {
    path: 'service/add-edit-service',
    component: AddEditServiceComponent
  },
  {
    path: 'billing',
    component: BillingListComponent
  },
  {
    path: 'billing/add-edit-billing',
    component: AddEditBillingComponent
  },
  {
    path: 'billing/bills',
    component: BillListComponent
  },
  {
    path: 'billing/add-edit-bill',
    component: AddEditBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
