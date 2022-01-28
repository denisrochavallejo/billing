import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/model/client';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { NgbdModalConfirmAutofocusComponent } from 'src/app/shared/ngbd-modal-confirm-autofocus/ngbd-modal-confirm-autofocus.component';
import { ClientService } from '../shared/service/client.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/service/alert/alert.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {

  title: string = 'Clients';
  description: string = 'See all client details';
  clients: Client [];
  constructor(private modalService: NgbModal, private clientService: ClientService, private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(result => {
      this.clients = result;
    });
  }

  onDeleteClient(client: any){    
    let modal = this.modalService.open(NgbdModalConfirmAutofocusComponent);
    modal.componentInstance.entityName = 'Client';
    modal.componentInstance.description = client.name;
    modal.result.then(result => {
      console.log(client);
      if(result === 'OK')
      {
        this.clientService.deleteClient(client).subscribe(result => {
          this.router.navigate(['client']).then(() => {
            this.alertService.success('Client deleted successfully!');
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

  addClient(){
    this.router.navigate(['client/add-edit-client', {}])
  }

  editClient(client: Client){
    this.router.navigate(['client/add-edit-client', client])
  }

}


