import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalConfirmAutofocusComponent } from 'src/app/shared/ngbd-modal-confirm-autofocus/ngbd-modal-confirm-autofocus.component';
import { AlertService } from 'src/app/shared/service/alert/alert.service';
import { Service } from '../shared/model/service';
import { ServiceService } from '../shared/service/service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  title: string = 'Services';
  description: string = 'See all service details';
  services: Service[];

  constructor(private modalService: NgbModal, private serviceService: ServiceService, private router: Router, 
      private alertService: AlertService) { }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(result => {
      this.services = result;
    })
  }

  editService(service: Service){
    this.router.navigate(['service/add-edit-service', service]);
  }

  onDeleteService(service: any){    
    let modal = this.modalService.open(NgbdModalConfirmAutofocusComponent);
    modal.componentInstance.entityName = 'Service';
    modal.componentInstance.description = service.category;
    modal.result.then(result => {
      console.log(service);
      if(result === 'OK')
      {
        this.serviceService.deleteService(service).subscribe(result => {
          this.router.navigate(['service']).then(() => {
            this.alertService.error('Service deleted successfully!');
            setTimeout(function () { 
              window.location.reload();
            }, 2000);
          });
        });
      }
    }, error => {
      console.log(error);
    });    
  }

  addService(){
    this.router.navigate(['service/add-edit-service', {}])
  }

}
