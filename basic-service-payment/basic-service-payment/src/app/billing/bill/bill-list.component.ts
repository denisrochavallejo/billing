import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalConfirmAutofocusComponent } from 'src/app/shared/ngbd-modal-confirm-autofocus/ngbd-modal-confirm-autofocus.component';
import { AlertService } from 'src/app/shared/service/alert/alert.service';
import { Bill } from '../shared/model/bill';
import { BillService } from '../shared/service/bill/bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  title: string = 'Bills';
  description: string = 'See all bills details';
  bills: Bill[];

  constructor(private router: Router, private billService: BillService, private modalService: NgbModal, private alertService: AlertService) { }

  ngOnInit(): void {
    this.billService.getBills().subscribe(result => {
      this.bills = result;
    });
  }

  addBill(){
    this.router.navigate(['billing/add-edit-bill', {}])
  }

  onEditClient(item: any){
    this.router.navigate(['billing/add-edit-bill', item])
  }

  onDeleteBill(bill: any){    
    let modal = this.modalService.open(NgbdModalConfirmAutofocusComponent);
    modal.componentInstance.entityName = 'Bill';
    modal.componentInstance.description = `${bill.service} - ${bill.period}`;
    modal.result.then(result => {
      console.log(bill);
      if(result === 'OK')
      {
        this.billService.deleteBill(bill).subscribe(result => {
          this.alertService.success('Bill deleted successfully!');
          this.router.navigate(['billing/bills']).then(() => {            
            setTimeout(function () { 
              window.location.reload();
            }, 2000);
          });;
        });
      }
    }, error => {
      console.log(error);
    }); 
  }
}
