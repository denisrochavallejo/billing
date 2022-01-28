import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/client/shared/service/client.service';
import { ServiceService } from 'src/app/service/shared/service/service.service';
import { NgbdModalConfirmAutofocusComponent } from 'src/app/shared/ngbd-modal-confirm-autofocus/ngbd-modal-confirm-autofocus.component';
import { Billing } from '../shared/model/billing';
import { Currency } from '../shared/model/currency';
import { Status } from '../shared/model/status';
import { BillingService } from '../shared/service/billing/billing.service';

const statuses : any [] = ['PENDING', 'PAID'];

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})
export class BillingListComponent implements OnInit {

  title: string = 'Billings';
  description: string = 'See all billing details';
  billings: Billing[];
  loadedBillings: Billing[];
  clients: string[];
  services: string[];
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  search = { client: {} , service: {}, status: {}};
  statuses = statuses;

  constructor(private clientService: ClientService, private serviceService: ServiceService, private router: Router,
      private billingService: BillingService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.billingService.getBillings().subscribe(result => {
      this.loadedBillings = result;
      this.collectionSize = this.loadedBillings.length;
      this.refreshBillings();
    });    
    this.clientService.getClients().subscribe(result => {
      this.clients = result.map(client => client.name);
    });
    this.serviceService.getServices().subscribe(serviceResult => {
      this.services = serviceResult.map(service => service.category );
    });
    
  }

  addBilling(){
    this.router.navigate(['billing/add-edit-billing', {}])
  }

  editBilling(billing: Billing){
    this.router.navigate(['billing/add-edit-billing', billing])
  }

  deleteBilling(billing: Billing) {
    let modal = this.modalService.open(NgbdModalConfirmAutofocusComponent);
    modal.componentInstance.entityName = 'Billing';
    modal.componentInstance.description = `${billing.service} - ${billing.period} for ${billing.client}`;
    modal.result.then(result => {
      console.log(billing);
      if(result === 'OK')
      {
        this.billingService.deleteBilling(billing).subscribe(result => {
          this.router.navigate(['billing']).then(() => {
            window.location.reload();
          });;
        });
      }
    }, error => {
      console.log(error);
    }); 
  }

  refreshBillings() {
    this.billings = this.filterByClient(this.filterByService(this.filterByStatus(this.loadedBillings)))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  searchByClient($event){
    this.search.client = $event;
    this.refreshBillings();
  }

  searchByService($event){
    this.search.service = $event;
    this.refreshBillings();
  }

  searchByStatus($event){
    this.search.status = $event;
    this.refreshBillings();
  }

  filterByClient(billings: Billing[]) {
    return Object.keys(this.search.client).length != 0 ? billings.filter(billing => billing.client == this.search.client) : billings;
  }

  filterByService(billings: Billing[]) {
    return Object.keys(this.search.service).length != 0 ? billings.filter(billing => billing.service == this.search.service) : billings;
  }

  filterByStatus(billings: Billing[]) {
    return Object.keys(this.search.status).length != 0 ? billings.filter(billing => billing.status == this.search.status) : billings;
  }

}
