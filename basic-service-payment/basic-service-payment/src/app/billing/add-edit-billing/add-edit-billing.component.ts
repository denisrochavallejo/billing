import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/client/shared/model/client';
import { ClientService } from 'src/app/client/shared/service/client.service';
import { ServiceService } from 'src/app/service/shared/service/service.service';
import { AlertService } from 'src/app/shared/service/alert/alert.service';
import { Billing } from '../shared/model/billing';
import { BillingService } from '../shared/service/billing/billing.service';

const MONTHS : string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const YEARS : string[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];

@Component({
  selector: 'app-add-edit-billing',
  templateUrl: './add-edit-billing.component.html',
  styleUrls: ['./add-edit-billing.component.css']
})
export class AddEditBillingComponent implements OnInit {

  title: string = 'Billings';
  description: string = 'See all billing details';
  currentBilling: any;
  clients: string[];
  services: string[];
  months: string[] = MONTHS;
  years: string[] = YEARS;

  constructor(private route: ActivatedRoute, private clientService: ClientService, private serviceService: ServiceService,
              private router: Router, private billingService: BillingService, private alertService: AlertService) { }

  ngOnInit(): void {
    let params = this.route.snapshot.params;    
    if(params.id == null){
      this.currentBilling = { id: null , service: null, period: null, client: null, status: null };
      this.title = 'Add Billing';
    }
    else {
      this.title = 'Pay Billing';
      this.currentBilling = this.route.snapshot.params;
      this.getPeriodYearAndMonth();
    }

    this.serviceService.getServices().subscribe(serviceResult => {
      this.services = serviceResult.map(service => service.category);
    });
    this.clientService.getClients().subscribe(result => {
      this.clients = result.map(client => client.name);
    });
  }

  cancel(){
    this.currentBilling = null;
    this.router.navigate(['']);
  }

  changeMothPeriod(month: any){
    this.currentBilling.monthPeriod = month;
    this.updatePeriod();
  }

  changeYearPeriod(year: any){
    this.currentBilling.yearPeriod = year;
    this.updatePeriod();
  }

  updatePeriod() {
    this.currentBilling.period = `${this.currentBilling.yearPeriod}${this.currentBilling.monthPeriod}`;    
  }

  getPeriodYearAndMonth(){
    this.currentBilling = Object.assign({}, this.currentBilling, {monthPeriod:this.currentBilling.period.substring(4,6)})
    this.currentBilling = Object.assign({}, this.currentBilling, {yearPeriod:this.currentBilling.period.substring(0,4)})
  }

  payBilling() {
    this.billingService.updateBilling(this.currentBilling).subscribe(result => {
      this.router.navigate(['billing'])
          .then(() => {
            this.alertService.info('Billing paid successfully!');
            setTimeout(function () { 
              window.location.reload();
            }, 2000);
          });
    });  
  }

}
