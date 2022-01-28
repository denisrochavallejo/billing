import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/service/alert/alert.service';
import { Client } from '../shared/model/client';
import { ClientService } from '../shared/service/client.service';

const options = {
  autoClose: true,
  keepAfterRouteChange: true
};

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.css']
})
export class AddEditClientComponent implements OnInit {
  title: string = 'Clients'
  description: string = 'See all client details';
  currentClient: any;
  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService, private alertService: AlertService) { }

  ngOnInit(): void {
    let params = this.route.snapshot.params;    
    if(params.id == null){
      this.currentClient = { id: null , name: null };
      this.title = 'Add Client';
    }
    else {
      this.title = 'Edit Client';
      this.currentClient = Object.assign({}, this.route.snapshot.params);
      
    }    
  }

  cancel(){
    this.currentClient = null;
    this.router.navigate(['client']);
  }

  save(){
    if(this.currentClient.id == null){
      this.clientService.addClient(this.currentClient).subscribe(result => {
        this.router.navigate(['client']).then(() => {
          this.alertService.success('Client created successfully!');
            setTimeout(function () { 
              window.location.reload();
            }, 2000);
        });
      });    
    }
    else {
      this.clientService.updateClient(this.currentClient).subscribe(result => {
        this.router.navigate(['client']).then(() => {
          this.alertService.info('Client updated successfully!');
            setTimeout(function () { 
              window.location.reload();
            }, 2000);
        });
      }); 
    }    
  }
}
