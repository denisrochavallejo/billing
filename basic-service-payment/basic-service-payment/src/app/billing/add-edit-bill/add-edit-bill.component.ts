import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/shared/service/service.service';
import { AlertService } from 'src/app/shared/service/alert/alert.service';
import { BillService } from '../shared/service/bill//bill.service';

const MONTHS : string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const YEARS : string[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];

@Component({
  selector: 'app-add-edit-bill',
  templateUrl: './add-edit-bill.component.html',
  styleUrls: ['./add-edit-bill.component.css']
})
export class AddEditBillComponent implements OnInit {
  title: string = 'Bills';
  description: string = 'See all bill details';
  currentBill: any;
  services: string[];
  months: string[] = MONTHS;
  years: string[] = YEARS;

  constructor(private route: ActivatedRoute, private serviceService: ServiceService, private router: Router, private billService: BillService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    let params = this.route.snapshot.params;    
    if(params.id == null){
      this.currentBill = { id: null , service: null, period: null };
      this.title = 'Add Bill';
    }
    else {
      this.title = 'Edit Bill';
      this.currentBill = this.route.snapshot.params;
      this.getPeriodYearAndMonth();
    }

    this.serviceService.getServices().subscribe(serviceResult => {
      this.services = serviceResult.map(service => service.category);
    });
  }

  cancel(){
    this.router.navigate(['billing/bills']);
  }

  save(){
    if(this.currentBill.id == null){
      if(this.billService.getStoredBills().some(bill => bill.period == this.currentBill.period && bill.service == this.currentBill.service)){
        this.alertService.error('There is already a bill with that service in the same period!');
        return;
      }
      this.billService.addBill(this.currentBill).subscribe(result => {
        this.router.navigate(['billing/bills'])
          .then(() => {
            this.alertService.success('Bill created successfully!');
            setTimeout(function () { 
              window.location.reload();
            }, 2000);
          });
        
      })
    }
    else{
      this.billService.updateBill(this.currentBill).subscribe(result => {
        this.router.navigate(['billing/bills'])
          .then(() => {
            this.alertService.info('Bill updated successfully!');
            setTimeout(function () { 
              window.location.reload();
            }, 2000);
          });
      })
    }
  }

  selectChange($event) {
    this.currentBill.service = $event;
    console.log($event);
  }

  changeAction(obj: any) {
    console.log(obj);
  }

  changeMothPeriod(month: any){
    this.currentBill.monthPeriod = month;
    this.updatePeriod();
  }

  changeYearPeriod(year: any){
    this.currentBill.yearPeriod = year;
    this.updatePeriod();
  }

  updatePeriod() {
    this.currentBill.period = `${this.currentBill.yearPeriod}${this.currentBill.monthPeriod}`;
    console.log(this.currentBill.period);
  }

  getPeriodYearAndMonth(){
    this.currentBill = Object.assign({}, this.currentBill, {monthPeriod:this.currentBill.period.substring(4,6)})
    this.currentBill = Object.assign({}, this.currentBill, {yearPeriod:this.currentBill.period.substring(0,4)})
  }

}
