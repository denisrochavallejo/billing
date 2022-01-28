import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/service/alert/alert.service';
import { ServiceService } from '../shared/service/service.service';

@Component({
  selector: 'app-add-edit-service',
  templateUrl: './add-edit-service.component.html',
  styleUrls: ['./add-edit-service.component.css']
})
export class AddEditServiceComponent implements OnInit {
  title: string = 'Services'
  description: string = 'See all service details';
  currentService: any;

  constructor(private router: Router, private serviceService: ServiceService, private route: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit(): void {
    let params = this.route.snapshot.params;    
    if(params.id == null){
      this.currentService = { id: null , category: null };
      this.title = 'Add Service';
    }
    else {
      this.title = 'Edit Service';
      this.currentService = Object.assign({}, this.route.snapshot.params);
      
    }  
  }

  save(){
    if(this.currentService.id == null){
      this.serviceService.addService(this.currentService).subscribe(result => {
        this.router.navigate(['service']).then(() => {
          this.alertService.success('Service created successfully!');
            setTimeout(function () { 
              window.location.reload();
            }, 2000);
        });
      });
    }
    else{
      this.serviceService.updateService(this.currentService).subscribe(result => {
        this.router.navigate(['service']).then(() => {
          this.alertService.info('Service updated successfully!');
            setTimeout(function () { 
              window.location.reload();
            }, 2000);
        });
      });
    }
        
  }

  cancel(){
    this.currentService = null;
    this.router.navigate(['service']);
  }

}
