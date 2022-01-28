import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { BannerComponent } from './shared/banner/banner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { BillingListComponent } from './billing/billing-list/billing-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalConfirmAutofocusComponent } from './shared/ngbd-modal-confirm-autofocus/ngbd-modal-confirm-autofocus.component';
import { AddEditBillingComponent } from './billing/add-edit-billing/add-edit-billing.component';
import { BillListComponent } from './billing/bill/bill-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEditBillComponent } from './billing/add-edit-bill/add-edit-bill.component';
import { FormsModule } from '@angular/forms';
import { AddEditClientComponent } from './client/add-edit-client/add-edit-client.component';
import { AddEditServiceComponent } from './service/add-edit-service/add-edit-service.component';
import { AlertComponent } from './shared/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    BannerComponent,
    NavbarComponent,
    ServiceListComponent,
    BillingListComponent,
    NgbdModalConfirmAutofocusComponent,
    AddEditBillingComponent,
    BillListComponent,
    AddEditBillComponent,
    AddEditClientComponent,
    AddEditServiceComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
